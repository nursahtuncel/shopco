import "./newArrivals.css";

const NewArrivals = (products) => {
   
  let showall=false;
  const section = document.createElement("section");
  section.className = "new-arrivals";

  const title = document.createElement("h2");
  title.classList.add("newArrivalsTitle");
  title.textContent = "New Arrivals";
  section.appendChild(title);

  const cardContainer = document.createElement("ul");
  cardContainer.className = "card-container";
  section.appendChild(cardContainer);

  const viewButton =document.createElement("button");
  viewButton.classList.add("view-btn");
  viewButton.textContent =showall?"view Less": "View All";
  section.appendChild(viewButton);
  viewButton.addEventListener("click",()=>{
   showall = !showall;
   renderProduct();
   viewButton.textContent= showall ? "View Less": "View All";

  })

function generateStars(rating) {
  const fullStars = Math.floor(rating);         
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;   
  const emptyStars = 5 - fullStars - halfStar;  

  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<i class="star fa-solid fa-star"></i>`;
  }

  if (halfStar) {
    starsHTML += `<i class="emtyStar fa-solid fa-star-half-stroke"></i>`;
  }

  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<i class="emtyStar fa-regular fa-star"></i>`;
  }

  return starsHTML;
}

      
 
  const renderProduct = () => {
    cardContainer.innerHTML = ``;
    const itemsToShow = showall?products: products.slice(0, 4);

    itemsToShow.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className = "card-container-item";

      listItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3 class="itemTitle">${item.title}</h3>
        <div>${generateStars(item.rating.rate)}</div>
        <p class="itemPrice">$${item.price}</p>
      `;

      cardContainer.appendChild(listItem);
    });
  };

  renderProduct(); 



  return section;
};

export default NewArrivals;
