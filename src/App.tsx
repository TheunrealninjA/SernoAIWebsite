import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.tsx'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Navbar from '../components/Navbar.tsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
