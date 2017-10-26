import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/react-redux.png'

const Header = () => (
  <header className="main">
    <div className="logo">
      <img src={logo} alt="react and redux logo" height="15%" width="15%" />
    </div>
    <Link to={`/add`}>
      <p className="field">
        <button className="button is-medium">
          <span className="icon is-medium">
            <i className="fa fa-plus"></i>
          </span>
          <span>Add todo</span>
        </button>
      </p>
    </Link>
    <h2 className="title is-2">
      Getting Things Done App
      </h2>
  </header>
)

export default Header