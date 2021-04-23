import { toast } from "react-toastify";
const APIURL =
  process.env.NODE_ENV === "production"
    ? "https://step-up-electronics.glitch.me"
    : "http://localhost:5000";

export const All_Products = () => {
  return fetch(
    `https://step-up-electronics.glitch.me/products`
  ).then((response) => response.json());
};

export const signInRequest = (userName, password) => {
  return fetch(`https://step-up-electronics.glitch.me/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName,
      password,
    }),
  }).then((response) => {
    if (response.error) {
      toast.error("error");
    } else {
      toast.success("successful");
    }
    return response.json();
  });
};
// signup user
export const signUpRequest = (
  userName,
  password,
  email,
  firstName,
  lastName
) => {
  return fetch(`https://step-up-electronics.glitch.me/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userName,
      password,
      email,
      firstName,
      lastName,
    }),
  }).then((response) => response.json());
};
// add to cart
export const addToCart = (userId, productName, price, productDetail) => {
  return fetch(`https://step-up-electronics.glitch.me/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      productName,
      price,
      productDetail,
    }),
  }).then((response) => response.json());
};
