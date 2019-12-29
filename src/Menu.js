import React from 'react'
import {Link} from 'react-router-dom'


const Menu = ()=>{
  return(
    <div class>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark white">
        <Link to="/" className="git" href="#" style={{color:"white"}}>Bored</Link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#" style={{color:"white"}}>GBP <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"white"}}>Clothing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"white"}}>Accessories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"white"}}>Skateboarding</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"white"}}>Shoes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"white"}}>Sales</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{color:"white"}}>Blog</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" style={{color:"white"}} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Brands
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/Nike" class="dropdown-item">Nike</Link>
                <a class="dropdown-item" href="#">Levis Skateboarding</a>
                <a class="dropdown-item" href="#">Helas</a>
                <a class="dropdown-item" href="#">Fucking Awesome</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu
