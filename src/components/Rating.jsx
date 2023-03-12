import grey_star from '../assets/grey-star.svg'
import red_star from '../assets/red-star.svg'
import '../styles/rating.css'
function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]
  const fullStar = <img src={red_star} alt="Full star" className="redStar" />
  const emptyStar = (
    <img src={grey_star} alt="Empty Star" className="greyStar" />
  )
  return (
    <div className="ratingStars">
      {stars.map((star) => (
        <span key={star}>{star <= rating ? fullStar : emptyStar}</span>
      ))}
    </div>
  )
}

export default Rating
