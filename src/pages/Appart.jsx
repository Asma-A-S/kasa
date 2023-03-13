import React from 'react'
import { useParams, Navigate } from 'react-router-dom-v5-compat'
import data from '../data/data.json'
import Rating from '../components/Rating'
import Slider from '../components/Slider'
import Collapse from '../components/Collapse'
import Tags from '../components/Tags'
import '../styles/appart.css'

function Appart() {
  const { id } = useParams()

  const appart = data.find((appart) => appart.id === id)

  if (!appart) {
    return <Navigate to="/error" />
  }

  const {
    title,
    location,
    host,
    tags,
    rating,
    equipments,
    description,
    pictures,
  } = appart

  const equipment = equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ))

  return (
    <div className="appart_container">
      <Slider slides={pictures} className="slider" />
      <div className="information">
        <div className="title_tags">
          <div className="about_appart">
            <h1 className="appart_title">{title}</h1>
            <p className="appart_location">{location}</p>
          </div>
          <div className="tags">
            <Tags tags={tags} />
          </div>
        </div>
        <div className="host_rating">
          <div className="host">
            <p className="host_name">{host.name}</p>
            <img src={host.picture} alt="" className="host_picture" />
          </div>
          <div className="rating">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
      <div className="appart_collapse">
        <div className="appart_collapse_child">
          <Collapse title="Description" description={description} />
        </div>
        <div className="appart_collapse_child">
          <Collapse title="Equipments" description={equipment} />
        </div>
      </div>
    </div>
  )
}

export default Appart
