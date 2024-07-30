export const checkPublishedRegix = (htmlContent: any) => {
  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  // Check if the first element is a heading (h1, h2, h3, etc.)
  const firstChild = doc.body.firstElementChild;
  if (firstChild && ["H1", "H2", "H3"].includes(firstChild.tagName)) {
    // Remove the first heading element
    doc.body.removeChild(firstChild);
  }

  // Return the remaining HTML as a string
  return doc.body.innerHTML;
};

// Process the content to exclude the beginning heading
