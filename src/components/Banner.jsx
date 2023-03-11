import React from 'react'
import '../styles/banner.css'
function Banner({ origin, texte }) {
  if (origin === 'Home') {
    return (
      <div className="banner banner_home">
        {<h1 className="banner_texte">{texte}</h1>}
      </div>
    )
  }
  if (origin === 'About') {
    return <div className="banner banner_about"></div>
  } else {
    return null
  }
}
export default Banner
//<img className="banner_img" src={image} alt="bannière" />
