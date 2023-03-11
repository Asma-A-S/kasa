import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom-v5-compat'
import About from '../pages/About'
import Home from '../pages/Home'
import Appart from '../pages/Appart'
import Error from '../pages/Error'
import Header from '../components/Header'
import Footer from '../components/Footer'
//const rootElement = document.getElementById('root')
//const root = createRoot(rootElement)
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appart/:id" element={<Appart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App
