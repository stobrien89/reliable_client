import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
    return <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{'margin-bottom': '30px'}}>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link to="/services" class="nav-link">Services</Link>
          </li>
          <li class="nav-item">
            <Link to="/testimonials" class="nav-link">Testimonials</Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link" >About</Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>

}

export default Nav;