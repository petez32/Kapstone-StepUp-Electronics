import logo from "./logo.svg";
import "./App.css";
import Toast from "./views/Toast";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Profile from "./views/profile";
import { useStore } from "./store/store"
import AllProduct from "./views/AllProduct";
import { Switch, Route } from "react-router-dom";
import Header from "./component/Header.js";
import "./asset/home.css";

function App() {
  const user = useStore((state) => state.user)
  return (
    <div className="App">
      <Header />
      <Toast />
      <Switch>
        <Route exact path="/" component={Home} />
        (!user.token){<Route path="/signin" component={Signin} />}
        {user.token &&<div>
          {user.userName}
          </div>}
        <Route path="/signup" component={Signup} />
        <Route path="/AllProduct" component={AllProduct} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
