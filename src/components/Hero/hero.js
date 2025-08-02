import "./hero.css";
import HeroImage from "./../../../images/heroImage.png";
const Hero = () => {
  const HeroContainer = document.createElement("div");
  HeroContainer.classList.add("HeroContainer");

  HeroContainer.innerHTML = `
    <div class="hero">
<div class="heroTextContent"> 
    <h1>FIND CLOTHES THAT MATCH YOUR STYLE</h1>
    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    <button>Shop Now</button>
  <ul class="positiveResult">
        <li> <h6>200+</h6> <p>International Brands</p></li>
        <li> <h6>2,000+</h6> <p>High-Quality Products</p></li>
        <li> <h6>30,000+</h6> <p>Happy Customers</p></li>
  </ul>
  </div>
</div>
    
    `;
  return HeroContainer;
};
export default Hero;
