import "./header.css";
import basketIcon from "./../../../images/icons/basketIcon.svg";
import userIcon from "./../../../images/icons/userIcon.svg";
import searchIcon from "./../../../images/icons/searchIcon.svg";
const Header = () => {
  const section = document.createElement("div");
  section.classList.add("example");
  section.innerHTML = `
    <div class="header">
      <div class="headerLogo">SHOP.CO</div>
      <nav>
        <ul class="headerUL">
          <li>Shop</li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </nav>
     <div class="headerSearchContainer">
     <img class="headerSearchIcon" src="${searchIcon}" alt=""/>
     <input class="searchInput" type="text" placeholder="search for product..">
     </div>
     
          <div class="headerIcons">
    <img src="${basketIcon}" alt=""/>
    <img src="${userIcon}" alt=""/>
           </div>
    </div>
 `;
  return section;
};
export default Header;
