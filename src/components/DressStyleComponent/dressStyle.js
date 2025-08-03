import "./dressStyle.css"
import Casual from "./../../../images/casual.svg"
import Formal from "./../../../images/formal.svg"
import Gym from "./../../../images/gym.svg"
import Party from "./../../../images/party.svg"
const DressStyle = () => {
  const dressStyleSection = document.createElement("div");
  dressStyleSection.classList.add("dressStyleSection");

  dressStyleSection.innerHTML = `
    <h1 class="dressStyleTitle">BROWSE BY DRESS STYLE</h1>
    <div class="dressStyleImageContainer">
       <img src="${Casual}" alt="casual">
      <img src="${Formal}" alt="formal">
      <img src="${Gym}" alt="gym">
        <img src="${Party}" alt="casual">
    </div>
  `;

  return dressStyleSection;
};

export default DressStyle;
