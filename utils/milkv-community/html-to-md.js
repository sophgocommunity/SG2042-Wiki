// @ts-check

const TurndownService = new (require("turndown"))({
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
const HTMLParser = require("node-html-parser");
const path = require("node:path");
const sanitize = require("sanitize-filename");
const slugify = require("slugify").default;
const { pinyin } = require("pinyin-pro");
const { writeFile } = require("node:fs/promises");

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const adapters = require("./dom-adapters");

/**
 * @param {string} query
 * @returns {Promise<string>}
 */
function question(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

(async () => {
  const url = await question("Please input the url of the community post page: ");

  console.log("Fetching page content...");
  const html = await fetch(url).then((res) => res.text());

  console.log("Parsing page content...");
  const dom = HTMLParser.parse(html);

  console.log("Manipulating page content...");
  adapters.forEach((adapter) => {
    const nodes = dom.querySelectorAll(adapter.selector);
    nodes.forEach((node) => {
      const html = adapter.convert(node);
      node.replaceWith(html);
    });
  });

  const titleNode = dom.querySelector("#topic-title h1");
  const title = titleNode.textContent.trim();

  const contentNode = dom.querySelector("div.post[itemprop='articleBody']");
  const contentHTML = contentNode.toString();

  console.log("Converting to markdown...");
  let markdown = "## " + title + "\n\n";
  markdown += "论坛链接：" + url.trim() + "\n\n";
  markdown += TurndownService.turndown(contentHTML);

  const filename = slugify(sanitize(pinyin(title, { toneType: "none", nonZh: "consecutive", v: true }))) + ".md";
  const filepath = "generated-markdown/" + filename;
  console.log("Writing to file: " + filepath);
  await writeFile(path.join(__dirname, "./", filepath), markdown);

  rl.close();
})().catch((e) => {
  console.error(e);
  rl.close();
});
