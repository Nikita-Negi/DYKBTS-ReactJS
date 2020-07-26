import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Modal from 'react-modal';
import StarRating from './StarRatingComponent';
import { Link } from 'react-router-dom';


function Header (props) {
    const [modalIsopen, setmodalIsOpen]=useState(false);

    const navStyle={
      color: '#4E4D4D'
    };
    return(
    <React.Fragment>
      <Navbar className="navbar-color">
          <div className="container">
            <NavbarBrand href="/" className="navbarbrand-color"><i className="fa fa-hand-o-down"></i> DYKBTS by Nikita Negi</NavbarBrand>
          </div>
          <p className="desc">A small efforts to introduce bangtan to the world</p>

          <nav>
            <ul className="nav-links">
              <Link to="/" style={navStyle}>
                <li><a className="headerlink"><i class="fa fa-home" aria-hidden="true"></i> Home</a></li>
              </Link>
              <Link to="/about" style={navStyle}>
                <li><a className="headerlink"><i class="fa fa-info" aria-hidden="true"></i> About BTS </a></li>
              </Link>
              <Link to="/songs" style={navStyle}>  
                <li><a className="headerlink"><i class="fa fa-music" aria-hidden="true"></i> BTS Songs </a></li>
              </Link>
              <Link to="/quiz" style={navStyle}>  
                <li><a className="headerlink"><i class="fa fa-check-square-o" aria-hidden="true"></i> Meme Quiz </a></li>
              </Link>
            </ul>
          </nav>
          
          <button className="ratingbutton" onClick={() => setmodalIsOpen(true)}>Rate this app</button>
          <Modal isOpen={modalIsopen} onRequestClose={() => setmodalIsOpen(false)}>
              <br />
              <button onClick={() => setmodalIsOpen(false)} className="closemodalbutton"><i className="fa fa-window-close "></i></button>
              <br /><br />
              <h2>Rate This Application</h2>
              <br />
              <p>Select the number of stars and click on submit.</p>
              <StarRating />
              <br />
              <button onClick={() => setmodalIsOpen(false)} className="submitratingbutton"> Submit</button>                                                
          </Modal>
      </Navbar>
      
    </React.Fragment>
    );
}

export default Header;