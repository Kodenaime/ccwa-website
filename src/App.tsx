import React from 'react'
import { Routes, Route } from 'react-router'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Activities } from './pages/Activities'
import { Events } from './pages/Events'
import { Gallery } from './pages/Gallery'
import { Sponsorship } from './pages/Sponsorship'
import { Contact } from './pages/Contact'
import { Privacy } from './pages/Privacy'
import { Terms } from './pages/Terms'

const App: React.FC = () => {
  return (    
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sponsorship" element={<Sponsorship />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}

export default App