import Home from "./src/pages/homePage.js";
import ProductDetail from "./src/pages/productDetail.js";
import Card from "./src/pages/card.js";
import CategoryPage from "./src/pages/categoryPage.js";

const routes = {
  "/": Home,
  "/card": Card,
  "/category": CategoryPage,
  "/product": ProductDetail,
};

export function router(path) {
  const page = routes[path] || NotFound;
  return page();
}
