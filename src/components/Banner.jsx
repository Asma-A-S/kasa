import React from 'react'
import '../styles/banner.css'
function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="bannière" />
      {texte ? <h1 className="banner_texte">{texte}</h1> : null}
    </div>
  )
}
export default Banner
