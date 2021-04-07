import logo from './logo.svg';
import './App.css';
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import {Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin}  />
        <Route path="/signup" component={Signup}  />
      </Switch>
    </div>
  );
}

export default App;
