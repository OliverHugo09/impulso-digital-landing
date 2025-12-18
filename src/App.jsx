import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import Services from './components/services'
import CatalogoApp from './components/catalogoapp'
import Projects from './components/projects'
import Banner from './components/banner'
import Contacto from './components/contacto'
import Footer from './components/footer'
import WhatsAppButton from './components/WhatsappButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-background'>
      <Navbar/>
      <main className='text-gray-500'>
        <HeroSection/>
        <Services/>
        <CatalogoApp/>
        <Projects/>
        <Banner/>
        <Contacto/>
      </main>
      <Footer/>
      <WhatsAppButton />
    </div>

  )
}

export default App
