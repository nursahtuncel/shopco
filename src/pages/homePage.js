import Header from "../components/header";

const Home = () => {
  const home = document.createElement("div");
  home.appendChild(Header());
  return home;
};
export default Home;
