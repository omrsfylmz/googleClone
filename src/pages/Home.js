import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import PersonIcon from '@material-ui/icons/Person'
import Search from '../components/Search'

const Home = () => (
  <div className="home">
    <div className="home-header">
      <div className="header-left">
        <Link to="/about">About</Link>
        <Link to="/Store">Store</Link>
      </div>
      <div className="header-right">
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <AppsIcon />
        <PersonIcon />
      </div>
    </div>
    <div className="home-body">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt=""
      />
      <div className="input-container">
        <Search />
      </div>
    </div>
  </div>
)

export default Home
