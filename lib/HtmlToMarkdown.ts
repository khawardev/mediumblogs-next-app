import TurndownService from "turndown";
const turndownService: any = new TurndownService();

const HtmlToMarkdown = (htmlContent: any) => {
  return turndownService.turndown(htmlContent);
};
export default HtmlToMarkdown;
