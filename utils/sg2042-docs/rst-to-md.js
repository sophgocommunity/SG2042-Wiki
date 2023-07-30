// @ts-check

const child_process = require("node:child_process");
const fs = require("node:fs/promises");
const path = require("node:path");
const { setTimeout: sleep } = require("node:timers/promises");
const { promisify } = require("node:util");

const exec = promisify(child_process.exec);

/**
 * @type {symbol[]}
 */
const childIds = [];

/**
 * @param {string} rstPath
 * @param {string} [mdPath]
 * @returns {Promise<boolean>}
 */
async function rst2md(rstPath, mdPath = "") {
  const childId = Symbol.for(mdPath);
  if (childIds.includes(childId)) {
    console.error(`fatal error: already writing to ${mdPath}`);
    return false;
  }
  while (childIds.length > 8) {
    await sleep(50);
  }
  childIds.push(childId);
  console.log(`converting ${rstPath} to ${mdPath} ...`);

  if (!mdPath) {
    mdPath = rstPath.replace(/\.rst$/i, ".md");
    if (mdPath === rstPath) {
      mdPath += ".md";
    }
  }

  try {
    const { stdout, stderr } = await exec(`pandoc -f rst -t markdown -o '${mdPath}' '${rstPath}'`);
    if (stderr) {
      console.error(stderr);
      return false;
    }
    if (stdout.trim()) {
      console.log(stdout);
    }
    return true;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    childIds.splice(childIds.indexOf(childId), 1);
  }
}

/**
 * @param {string} dirPath
 */
async function readdirFlat(dirPath) {
  /**
   * @type {string[]}
   */
  const files = [];

  for await (const dirent of await fs.opendir(dirPath)) {
    if (dirent.isFile()) {
      files.push(`${dirPath}/${dirent.name}`);
    } else if (dirent.isDirectory() && !dirent.isSymbolicLink()) {
      for await (const file of await readdirFlat(`${dirPath}/${dirent.name}`)) {
        files.push(`${dirent.name}/${file}`);
      }
    }
  }

  return files;
}

async function main() {
  if (process.argv.length < 4) {
    console.error("fatal error: dir paths required");
    console.error("usage: node rst-to-md.js <rst-dir-path> <md-dir-path>");
    return 1;
  }
  const rstFiles = (await readdirFlat(process.argv[2])).filter((file) => /\.rst$/i.test(file));
  const mdFilenames = rstFiles.map((file) => path.basename(file).replace(/\.rst$/i, ".md"));

  /**
   * @type {Promise<boolean>[]}
   */
  const tasks = [];
  for (let i = 0; i < rstFiles.length; i++) {
    const rstFile = rstFiles[i];
    const mdFilename = mdFilenames[i];
    tasks.push(rst2md(`${rstFile}`, `${process.argv[3]}/${mdFilename}`));
  }

  const results = await Promise.all(tasks);
  if (results.some((result) => !result)) {
    console.error("error: failed to convert some files");
  }
}

main();
