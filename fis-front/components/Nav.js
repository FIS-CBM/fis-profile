import React from 'react';
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className = 'Nav-wrapper'>
            <div className = 'Nav-links-wrapper'>
                <Link to = '/' className = 'Nav-link' activeClassName = 'Active-link'>Home</Link>
                <Link to = '/superheroes' className = 'Nav-link' activeClassName = 'Active-link'>About</Link>
                <Link to = '/starwars' className = 'Nav-link' activeClassName = 'Active-link'>Contact</Link>
            </div>
        </div>
    )
  }
  
  export default Nav;