import { render } from "../../node_modules/lit-html/lit-html.js";
import { navView } from "../views/navView.js";

const header = document.querySelector(".header-nav");
const main = document.getElementById("content");

export const renderNavigation = (ctx, next) => {
  render(navView(ctx), header);
  next();
};

const renderContent = (templateResult) => {
  render(templateResult, main);
};

export const renderContentMiddleware = (ctx, next) => {
  ctx.render = renderContent;
  next();
};
