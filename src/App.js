import logo from "./logo.svg";
import "./App.css";
import Toast from "./views/Toast";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Profile from "./views/profile";
import { useStore } from "./store/store";
import AllProducts from "./views/AllProducts";
import { Switch, Route } from "react-router-dom";
import Header from "./component/Header.js";
import "./asset/home.css";
import CellPhone from "./views/phones";
import Television from "./views/Televisions";
import Tablet from "./views/Tablets";

function App() {
  //const user = useStore((state) => state.user);
  return (
    <div className="App">
      <Header />
      <Toast />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/AllProducts" component={AllProducts} />
        <Route path="/products/phones" component={CellPhone} />
        <Route path="/profile" component={Profile} />
        <Route path="/products/Televisions" component={Television} />
        <Route path="/products/Tablets" component={Tablet} />
      </Switch>
    </div>
  );
}

export default App;
