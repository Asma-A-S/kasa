import Banner from '../components/Banner'
//import image from '../assets/BANNER.png'
import Collapse from '../components/Collapse'
import dropDown from '../data/dropDown.json'
import '../styles/about.css'
function About() {
  return (
    <div className="About">
      <Banner />
      <div className="Dropdown">
        {dropDown.map(({ title, description }, index) => (
          <Collapse
            key={`${title}-${index}`}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  )
}
export default About
