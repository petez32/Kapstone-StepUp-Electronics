import logo from "./logo.svg";
import "./App.css";
import Toast from "./views/Toast";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
<<<<<<< HEAD
import Profile from "./views/profile";
import { Switch, Route } from "react-router-dom";
=======
import { Switch, Route } from "react-router-dom";
import Header from "./component/Header.js";
import "./asset/home.css";

>>>>>>> 5895b42db6c13badbb179bcc18fb8fd86513dbba
function App() {
  return (
    <div className="App">
      <Header />
      <Toast />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
<<<<<<< HEAD
        <Route path="/profile" component={Profile} />
=======
>>>>>>> 5895b42db6c13badbb179bcc18fb8fd86513dbba
      </Switch>
    </div>
  );
}

export default App;
