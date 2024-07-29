export const extractAndValidateContent = (htmlContent: any) => {
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

  // Extract and validate the first paragraph
  let firstValidParagraph = null;
  const paragraphs = Array.from(doc.querySelectorAll("p"));
  for (const paragraph of paragraphs) {
    const outerHTML = paragraph.outerHTML;
    if (validParagraphFormats.some((format) => outerHTML.startsWith(format))) {
      firstValidParagraph = paragraph.innerHTML;
      break;
    }
  }

  // Extract the first image URL
  let firstImageUrl = null;
  const images: any = Array.from(doc.querySelectorAll("p > img"));
  if (images.length > 0) {
    firstImageUrl = images[0].src;
  }

  // Check if valid content exists
  if (!firstValidHeading) {
    return { error: "No valid headings found" };
  }
  //   if (!firstValidParagraph) {
  //     return { error: "No valid paragraphs found" };
  //   }
  //   if (!firstImageUrl) {
  //     return { error: "No images found" };
  //   }

  return {
    heading: removeEmStrongTags(firstValidHeading),
    paragraph: firstValidParagraph
      ? removeEmStrongTags(firstValidParagraph)
      : "No Description Availaible !!",
    imageUrl: firstImageUrl
      ? firstImageUrl
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png?20210219185637",
  };
};
