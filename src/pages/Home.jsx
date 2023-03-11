import { Link } from 'react-router-dom-v5-compat'
import '../styles/home.css'
import Banner from '../components/Banner'
//import { useState, useEffect } from 'react'
import image from '../assets/BANNER.png'
import Cards from '../components/Cards'
import data from '../data/data.json'

function Home() {
  return (
    <div className="home">
      <Banner image={image} texte="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {data.map(({ id, cover, title }) => (
          <div className="gallery_card" key={id}>
            <Link to={`/appart/${id}`}>
              <Cards cover={cover} title={title} />
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}
export default Home
