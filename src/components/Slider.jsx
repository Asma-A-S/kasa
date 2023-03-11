import { useState } from 'react'
import '../styles/slider.css'
import arrowLeft from '../assets/Vector-left.svg'
import arrowRight from '../assets/Vector-right.svg'

function Slider({ slides }) {
  const [current, setCurrent] = useState(0)
  const slidesLength = slides.length
  const handleLeftArrowClick = () => {
    setCurrent(current === 0 ? slidesLength - 1 : current - 1)
  }
  const handleRightArrowClick = () => {
    setCurrent(current === slidesLength - 1 ? 0 : current + 1)
  }

  return (
    <div className="slider">
      <span className="slider_fraction">
        {current + 1}/{slidesLength}
      </span>
      {slidesLength > 1 && (
        <div className="arrows">
          <div className="arrow">
            <img
              src={arrowLeft}
              alt="left arrow"
              className="arrow_left"
              onClick={handleLeftArrowClick}
            />
          </div>
          <div className="arrow">
            <img
              src={arrowRight}
              alt="right arrow"
              className="arrow_right"
              onClick={handleRightArrowClick}
            />
          </div>
        </div>
      )}
      {slides.map((picture, index) => (
        <div key={index}>
          {index === current && (
            <img className="slider_image" src={picture} alt="slide" />
          )}
        </div>
      ))}
    </div>
  )
}
export default Slider
