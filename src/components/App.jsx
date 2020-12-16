import "./App.css";

import { Route, Switch } from "react-router-dom";

import HeaderNav from "./Default/HeaderNav/HeaderNav";
import MainContent from "./Default/MainContent/Maincontent";
import FooterNav from "./Default/FooterNav/FooterNav";
import Home from "./Home/Home";
import Services from "./Services/Services"
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services}/>
        <Route path="/testimonials" component={Testimonials}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        
      </Switch>
      <FooterNav />
    </>
  );
}

export default App;
