import React from 'react'
import '../styles/cards.css'
function Cards({ cover, title }) {
  return (
    <div className="card">
      <img src={cover} alt="logement" className="gallery_img" />
      <h2 className="card_title">{title}</h2>
    </div>
  )
}
export default Cards
