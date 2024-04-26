import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'



const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            {props.title}
          </Link>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-a active text-dark text-decoration-none" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-a text-dark text-decoration-none" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`form-check form-switch text-light`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?'dark':'light'} mode`}</label>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: "TextUtils",
}
