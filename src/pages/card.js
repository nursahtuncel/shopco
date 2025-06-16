const Card = () => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<div>card</div>`;
  return card;
};

export default Card;
