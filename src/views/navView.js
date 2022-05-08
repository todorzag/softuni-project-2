import { html } from "../../node_modules/lit-html/lit-html.js";

const guestNav = () => html` <!--Only Guest-->
  <li><a href="/login">Login</a></li>
  <li><a href="/register">Register</a></li>`;

const userNav = () => html`<!--Only Users-->
  <li><a href="/create">Create Postcard</a></li>
  <li><a href="/logout">Logout</a></li>`;

const navTemplate = (isUser) => html`<nav>
  <section class="logo">
    <img src="./images/logo.png" alt="logo" />
  </section>
  <ul>
    <!--Users and Guest-->
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    ${isUser ? userNav() : guestNav()}
  </ul>
</nav>`;

export const navView = (ctx) => {
  return navTemplate(ctx.user);
};
