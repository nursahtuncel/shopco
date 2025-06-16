const ProductDetail = (id) => {
  const container = document.createElement("div");
  container.innerHTML = `
    <h1>Product ${id}</h1>
  `;
  return container;
};
export default ProductDetail;
