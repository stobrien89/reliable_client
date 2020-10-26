import "./App.css";

import { Route, Switch } from "react-router-dom";

import HeaderNav from "./Default/HeaderNav/HeaderNav";
import MainContent from "./Default/MainContent/Maincontent";
import FooterNav from "./Default/FooterNav/FooterNav";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <HeaderNav />
      <Switch>
        <Route path="/" component={Home} />
        <Route />
        <Route />
        <Route />
      </Switch>
      <FooterNav />
    </>
  );
}

export default App;
