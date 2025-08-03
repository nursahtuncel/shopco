import Banner from "../../components/Banner/banner";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";
import NewArrivals from "../../components/NewArrivals/newArrivals";

const homepage = () => {
  const container = document.createElement("div");

  container.appendChild(Banner());
  container.appendChild(Header());
  container.appendChild(Hero());

  // Data fetch 
  fetch("https://fakestoreapi.com/products?")
    .then((res) => res.json())
    .then((data) => {
      container.appendChild(NewArrivals(data));
    });

  return container;
};

export default homepage;
