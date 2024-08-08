export const checkPublishedRegix = (htmlContent: string) => {
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Check if the first element is a heading (h1, h2, h3, etc.)
  const firstChild = doc.body.firstElementChild;
  if (firstChild && ["H1", "H2", "H3"].includes(firstChild.tagName)) {
    // Remove the first heading element
    doc.body.removeChild(firstChild);
  }

  // Locate the <img> tag and ensure it is followed by a <p> tag
  const imgTag = doc.querySelector("img");
  if (imgTag) {
    const imgParent = imgTag.parentElement;

    if (imgParent && imgParent.tagName !== "P") {
      // If the <img> is not already wrapped in a <p>, wrap it
      const pTag = doc.createElement("p");
      imgTag.before(pTag);
      pTag.appendChild(imgTag);
    }

    // Ensure that the text after the image is in a separate <p> tag
    const nextSibling: any = imgTag.nextSibling;
    if (nextSibling && nextSibling.nodeType === Node.TEXT_NODE) {
      const textContent = nextSibling.textContent.trim();
      if (textContent) {
        const newPTag: any = doc.createElement("p");
        newPTag.textContent = textContent;
        imgTag.parentNode?.insertBefore(newPTag, nextSibling);
        nextSibling.remove();
      }
    }
  }

  // Return the modified HTML as a string
  return doc.body.innerHTML;
};
