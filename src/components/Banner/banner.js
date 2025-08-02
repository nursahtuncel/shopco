import "./banner.css"

const Banner = ()=>{
    const BannerContainer =document.createElement("div");
    BannerContainer.classList.add("bannerContainer");
    BannerContainer.innerHTML=`
    <div class="banner">
   <p class="bannerText"> Sign up and get 20% off to your first order.</p>
   <a href="#" class="bannerLink"> Sign up now<a/>
   </div>
    `
return BannerContainer;
}
export default Banner;