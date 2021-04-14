export const All_Products = () => {
  return fetch("http://localhost:5000/products").then((response) => response.json());
};
