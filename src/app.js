import page from "../node_modules/page/page.mjs";

import {
  renderContentMiddleware,
  renderNavigation,
} from "./middleware/renderMiddleware.js";

import { homeView } from "./views/homeView.js";
import { authMiddleware } from "./middleware/authMiddleware.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";
import { dashboardView } from "./views/dashboardView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { deleteView } from "./views/deleteView.js";
import { editView } from "./views/editView.js";

page(authMiddleware);
page(renderNavigation);
page(renderContentMiddleware);

page("/", homeView);
page("/login", loginView);
page("/logout", logoutView);
page("/register", registerView);
page("/dashboard", dashboardView);
page("/create", createView);
page("/details/:petId", detailsView);
page("/details/delete/:petId", deleteView);
page("/details/edit/:petId", editView);

page.start();
