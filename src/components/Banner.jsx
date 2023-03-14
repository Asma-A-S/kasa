import React from 'react'
import { useLocation } from 'react-router-dom-v5-compat'
import banner_about from '../assets/about.png'
import banner_home from '../assets/BANNER.png'
import '../styles/banner.css'
function Banner({ texte }) {
  const location = useLocation()
  console.log(location)
  return (
    <div
      className={`banner ${
        location.pathname !== '/about' ? 'banner_home' : ''
      }`}
    >
      <img
        className="banner_img"
        src={location.pathname === '/about' ? banner_about : banner_home}
        alt="bannière"
      />
      <div className="background"></div>
      <h1 className="banner_texte">{texte}</h1>
    </div>
  )
}
export default Banner
