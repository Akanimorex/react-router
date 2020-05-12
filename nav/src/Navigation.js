import React from 'react';
import './App.css';
import  {Link} from 'react-router-dom';


function Navigation() {
    const navStyle = {

        color:'white',
        textDecoration:'none'

    }

  return (
    <nav>
        
             <h3>LOGO</h3>   
        
        <ul className='nav-links'>
        
            <Link style={navStyle} to='/'>
             <li>Home</li>   
            </Link>

            <Link style={navStyle} to='/about'>
             <li>About</li>   
            </Link>

            <Link style={navStyle} to='/portifolio'>
             <li>Portifolio</li>   
            </Link>

            <Link style={navStyle} to='/contact'>
             <li>Contact</li>   
            </Link>
          
        

        </ul>
    </nav>
  );
}

export default Navigation;
