import Banner from "../../components/Banner/banner";
import Header from "../../components/HeaderComponent/header";

const homepage =()=>{
    const container =document.createElement("div");
     container.appendChild(Banner());
     container.appendChild(Header());
    return container;
}
export default homepage;