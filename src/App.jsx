

import heroImg from './assets/hero.png'
import './App.css';
import "./index.css";
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import WorkPage from './pages/OurWork'
import ContactPage from "./pages/Contact";
import BlogsPage from './pages/Blogs';
import TeamPage from './pages/OurTeam';
import ScrollToTop from './components/layouts/Scroll';


function App() {
  

  return (
    <>
    <Header />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/work' element={<WorkPage />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/blogs' element={<BlogsPage/>} />
        <Route path='/contact' element={<ContactPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App



