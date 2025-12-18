import Logo from '/LogoImpulsoDigital.png'
import { useScroll } from '../hooks/useScroll'

export default function Navbar() {
    const isScrolled = useScroll(50); // Cambia tras 50px de scroll

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ease-in-out transition-colors duration-500 ${
        isScrolled
          ? 'bg-white shadow-sm backdrop-blur-sm' // Estado con scroll
          : 'bg-transparent'               // Estado inicial (transparente)
      }`}
    >
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
            <nav className='flex justify-between items-center'>
                <img src={Logo} width={80} height={80} alt="" />
                <div className='hidden md:flex items-center gap-6'>
                    <button className='text-gray-500 cursor-pointer text-sm font-medium hover:text-black duration-500 ease-in-out transition-colors '>
                        <a href="#servicios">Servicios</a>
                    </button>
                    <button className='text-gray-500 cursor-pointer text-sm font-medium hover:text-black duration-500 ease-in-out transition-colors'>
                        <a href="#catalog">Catálogo</a>
                    </button>
                    <button className='text-gray-500 cursor-pointer text-sm font-medium hover:text-black duration-500 ease-in-out transition-colors'>
                        <a href="#portfolio">Portafolio</a>
                    </button>
                    <button className='text-gray-500 cursor-pointer text-sm font-medium hover:text-black duration-500 ease-in-out transition-colors'>
                        <a href="#contact">Contacto</a>
                    </button>
                    <button className='text-white cursor-pointer bg-black inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-9 px-4 py-2'>
                        <a href="#contact">Comezar Proyecto</a>
                    </button>
                </div>
            </nav>
        </div>
    </header>
  )
}