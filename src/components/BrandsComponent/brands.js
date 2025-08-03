import "./brands.css";
import Versace from "./../../../images/Versace.svg";
import Calvin from "./../../../images/Calvin.svg";
import Gucci from "./../../../images/Gucci.svg";
import Zara from "./../../../images/Zara.svg";
import Prada from "./../../../images/Prada.svg";

const BrandsSection = () => {
  const brandsSection = document.createElement("div");
  brandsSection.classList.add("brandsSection");

  brandsSection.innerHTML = `
    <div>
  
      <img src="${Versace}" alt="Versace" />
      <img src="${Zara}" alt="Zara" />
      <img src="${Gucci}" alt="Gucci" />
      <img src="${Prada}" alt="Prada" />
      <img src="${Calvin}" alt="Calvin" />
      <img src="${Versace}" alt="Versace" />
      <img src="${Zara}" alt="Zara" />
      <img src="${Gucci}" alt="Gucci" />
      <img src="${Prada}" alt="Prada" />
      <img src="${Calvin}" alt="Calvin" />
     </div>
  `;

  return brandsSection;
};

export default BrandsSection;
