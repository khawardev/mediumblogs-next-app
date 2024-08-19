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

  // Convert the specific <p> with ### to <h3><strong>...</strong></h3>
  const paragraphs = doc.querySelectorAll("p");
  paragraphs.forEach((p) => {
    const text = p.textContent?.trim();
    const img = p.querySelector("img");

    if (
      text &&
      (text.startsWith("### ") ||
        text.startsWith("## ") ||
        text.startsWith("# "))
    ) {
      let heading;
      const strong = document.createElement("strong");
      strong.textContent = text.replace(/^#+\s*/, ""); // Remove all leading `#` and spaces

      if (text.startsWith("### ")) {
        heading = document.createElement("h3");
      } else if (text.startsWith("## ")) {
        heading = document.createElement("h2");
      } else if (text.startsWith("# ")) {
        heading = document.createElement("h1");
      }
      if (heading) heading.appendChild(strong);

      // Create a new container for the image and heading
      const newContainer: any = document.createElement("p");
      newContainer.appendChild(img?.cloneNode(true)); // Clone the image to preserve it
      newContainer.appendChild(heading);
      if (p.parentNode) {
        p.parentNode.replaceChild(newContainer, p);
      }
      // Replace the old paragraph with the new container
    }
  });

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
