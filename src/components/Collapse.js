import { useState } from 'react'
import '../styles/collapse.css'
import vector from '../assets/Vector.png'
function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  const vectorClass = isOpen ? 'vector_down' : 'vector_up'
  return (
    <div className="collapse">
      <h2 className="collapse_title">
        {title}
        <img
          src={vector}
          alt="flèche"
          className={vectorClass}
          onClick={toggleCollapse}
        />
      </h2>
      {isOpen && (
        <div className="collapse_description">
          <p className="collapse_texte">{description}</p>
        </div>
      )}
    </div>
  )
}
export default Collapse
