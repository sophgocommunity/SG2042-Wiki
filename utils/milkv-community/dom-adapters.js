// @ts-check

/**
 * @typedef {import("node-html-parser").HTMLElement} HTMLParser_HTMLElement
 */

/**
 * @typedef DOMAdapter
 * @property {string} selector
 * @property {(node: HTMLParser_HTMLElement) => string} convert returns outerHTML
 */

/**
 * @type {DOMAdapter}
 */
const oneboxAdapter = {
  selector: "aside.onebox",
  convert: (node) => {
    const url = node.getAttribute("data-onebox-src");

    const textNode = /** @type {HTMLParser_HTMLElement} */ (node.querySelector("article > h3 > a").clone());
    textNode.removeChild(textNode.querySelector("span.badge"));
    const text = textNode.textContent;

    return `<a href="${url}">${text}</a>`;
  },
};

/**
 * @type {DOMAdapter}
 */
const lightboxAdapter = {
  selector: "div.lightbox-wrapper",
  convert: (node) => {
    const imageUrl = node.querySelector("a.lightbox").getAttribute("href");
    const alt = node.querySelector("a.lightbox img").getAttribute("alt");
    const width = node.querySelector("a.lightbox img").getAttribute("width");
    const height = node.querySelector("a.lightbox img").getAttribute("height");

    return `<img src="${imageUrl}" alt="${alt}" width="${width}" height="${height}"><br>`;
  },
};

module.exports = [oneboxAdapter, lightboxAdapter];
