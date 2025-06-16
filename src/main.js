import "./styles/main.scss";
import { router } from "./../router.js";

const app = document.getElementById("app");
const navigateTo = (url) => {
  history.pushState(null, null, url);
  render();
};

const render = () => {
  app.innerHTML = "";
  const content = router(window.location.pathname);
  app.appendChild(content);
};

window.addEventListener("popstate", render);

document.addEventListener("DOMContentLoaded", () => {
  render();

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("a[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
});
