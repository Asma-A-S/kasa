import { Link } from 'react-router-dom-v5-compat'
import errorImg from '../assets/404.png'
import '../styles/error.css'
function Error() {
  return (
    <div className="error">
      <img src={errorImg} alt="404" />
      <h1 className="error_texte">
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <Link to="/" className="error_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}
export default Error
