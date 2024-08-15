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

  // Extract the first image and separate it from the text within the same <p> tag
  let firstValidParagraph = null;
  let firstImageUrl = null;
  const paragraphs = Array.from(doc.querySelectorAll("p"));
  for (const paragraph of paragraphs) {
    const images = paragraph.querySelectorAll("img");

    if (images.length > 0) {
      firstImageUrl = images[0].src;

      // Separate the text that follows the image within the same <p> tag
      const textNodes = Array.from(paragraph.childNodes).filter(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()
      );

      // Combine text nodes into a single paragraph content
      if (textNodes.length > 0) {
        firstValidParagraph = textNodes
          .map((node) => node.textContent || "") // Provide a fallback empty string in case of null
          .join(" ");
      }

      // If there's valid paragraph text, break the loop
      if (firstValidParagraph) {
        break;
      }
    } else {
      // If the paragraph doesn't contain an image, and no valid paragraph has been found yet, check if it's valid
      const outerHTML = paragraph.outerHTML;
      if (
        validParagraphFormats.some((format) => outerHTML.startsWith(format))
      ) {
        firstValidParagraph = paragraph.innerHTML;
        break;
      }
    }
  }

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
