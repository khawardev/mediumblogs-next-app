export const storyCheckRegix = (htmlContent: any) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");

  const removeEmStrongTags = (htmlContent: any) => {
    return htmlContent.replace(/<\/?em>/g, "").replace(/<\/?strong>/g, "");
  };

  // Define the valid formats for headings and paragraphs
  const validHeadingFormats = [
    "<h1><strong>",
    "<h1><em><strong>",
    "<h1>",
    "<h1><em>",
    "<h2><strong>",
    "<h2><em><strong>",
    "<h2>",
    "<h2><em>",
    "<h3><strong>",
    "<h3><em><strong>",
    "<h3>",
    "<h3><em>",
  ];

  const validParagraphFormats = [
    "<p><strong>",
    "<p><em><strong>",
    "<p>",
    "<p><em>",
  ];

  // Extract and validate the first heading
  let firstValidHeading = null;
  const headings = Array.from(doc.querySelectorAll("h1, h2, h3"));
  for (const heading of headings) {
    const outerHTML = heading.outerHTML;
    if (validHeadingFormats.some((format) => outerHTML.startsWith(format))) {
      firstValidHeading = heading.innerHTML;
      break;
    }
  }

  // Extract the first image URL and its next sibling if it's a valid paragraph or heading
  let firstValidParagraph = null;
  let firstImageUrl = null;
  const images: any = Array.from(doc.querySelectorAll("p > img"));
  if (images.length > 0) {
    firstImageUrl = images[0].src;

    const nextSibling = images[0].parentElement?.nextElementSibling;

    if (
      nextSibling &&
      (nextSibling.tagName === "P" ||
        ["H1", "H2", "H3"].includes(nextSibling.tagName))
    ) {
      const outerHTML = nextSibling.outerHTML;
      if (
        validParagraphFormats.some((format) => outerHTML.startsWith(format)) ||
        validHeadingFormats.some((format) => outerHTML.startsWith(format))
      ) {
        firstValidParagraph = nextSibling.innerHTML;
      }
    }
  }

  // If no valid paragraph found after image, extract and validate the first paragraph not containing an image
  if (!firstValidParagraph) {
    const paragraphs = Array.from(doc.querySelectorAll("p"));
    for (const paragraph of paragraphs) {
      if (paragraph.querySelector("img")) {
        continue;
      }

      const outerHTML = paragraph.outerHTML;
      if (
        validParagraphFormats.some((format) => outerHTML.startsWith(format))
      ) {
        firstValidParagraph = paragraph.innerHTML;
        break;
      }
    }
  }

  // Check if valid content exists
  if (!firstValidHeading) {
    return { error: "No valid headings found" };
  }

  return {
    heading: removeEmStrongTags(firstValidHeading),
    paragraph: firstValidParagraph
      ? removeEmStrongTags(firstValidParagraph)
      : "No Description Available",
    imageUrl: firstImageUrl
      ? firstImageUrl
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637",
  };
};
