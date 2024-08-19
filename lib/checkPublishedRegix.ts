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

  // Locate all <img> tags in the content
  const imgTags = doc.querySelectorAll("img");

  imgTags.forEach((imgTag) => {
    const imgParent = imgTag.parentElement;

    // If the <img> is not already wrapped in a <p>, wrap it
    if (imgParent && imgParent.tagName !== "P") {
      const pTag = doc.createElement("p");
      imgTag.before(pTag);
      pTag.appendChild(imgTag);
    }

    // Move any siblings after the <img> tag into a new <p> tag
    let nextSibling = imgTag.nextSibling;

    // Collect all content until the next <img> or the end of the parent element
    const contentToMove: Node[] = [];
    while (nextSibling) {
      if (
        nextSibling.nodeType === Node.ELEMENT_NODE &&
        (nextSibling as Element).tagName === "IMG"
      ) {
        break;
      }
      contentToMove.push(nextSibling);
      nextSibling = nextSibling.nextSibling;
    }

    if (contentToMove.length > 0) {
      const newPTag = doc.createElement("p");
      contentToMove.forEach((node) => {
        newPTag.appendChild(node);
      });
      imgTag.parentNode?.insertBefore(newPTag, imgTag.nextSibling);
    }
  });

  // Return the modified HTML as a string
  return doc.body.innerHTML;
};
