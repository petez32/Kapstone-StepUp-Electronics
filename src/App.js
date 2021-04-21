import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Profile from "./views/profile";
import { useStore } from "./store/store";
import AllProducts from "./views/AllProducts";
import { Switch, Route } from "react-router-dom";
import Header from "./component/Header.js";
import MyCart from "./component/ShoppingCart";
import CheckOut from "./component/CheckOut";
import Order from "./component/Order";
import "./asset/home.css";
import { ShoppingCart } from "@material-ui/icons";
import CellPhone from "./views/phones";
import Television from "./views/Televisions";
import Tablet from "./views/Tablets";
import Desktop from "./views/Desktops";
import Laptop from "./views/Laptops";
import AddCredits from "./component/addcredits";


import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import ErrorPage from "./component/notFound"

function App() {
  toast.configure({
    autoClose: 5000,
    draggable: true,
  });  //const user = useStore((state) => state.user);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/AllProducts" component={AllProducts} />
        <Route path="/products/phones" component={CellPhone} />
        <Route path="/profile" component={Profile} />
        <Route path="/ShoppingCart" component={MyCart} />
        <Route path="/cart/checkout" component={CheckOut} />
        <Route path="/user/order" component={Order} />
        <Route path="/products/Televisions" component={Television} />
        <Route path="/products/Tablets" component={Tablet} />
        <Route path="/products/Desktops" component={Desktop} />
        <Route path="/products/Laptops" component={Laptop} />  
      </Switch>
      <ToastContainer closeButton={false} position="bottom-right" />
    </div>
  );
}

export default App;
