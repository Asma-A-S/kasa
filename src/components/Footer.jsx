import logoFooter from '../assets/Dark-LOGO.png'
import '../styles/footer.css'
function Footer() {
  return (
    <div className="footer">
      <img src={logoFooter} alt="logo" />
      <p className="footer_texte">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}
export default Footer
