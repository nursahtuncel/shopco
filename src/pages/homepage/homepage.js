import Banner from "../../components/Banner/banner";
import Header from "../../components/Header/header";
import Hero from "../../components/Hero/hero";

const homepage =()=>{
    const container =document.createElement("div");
     container.appendChild(Banner());
     container.appendChild(Header());
     container.appendChild(Hero())
    return container;
}
export default homepage;