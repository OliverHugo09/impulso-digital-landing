export default function HeroSection() {
  return (
      <section className='relative min-h-screen flex items-center justify-center bg-white pt-16'>
        <div className='max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center py-32'>
          <div className='space-y-8'>
            <h1 className='text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black' data-testid="text-hero-title">
              Desarrollo de <br /> Software Profesional
            </h1>
            <p className='text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 leading-relaxed' data-testid="text-hero-description">
              Creamos páginas web, aplicaciones web y nativas para todo tipo de empresas. Transforma tu idea en realidad con nuestro generador inteligente de propuestas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <button className="cursor-pointer bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-10 rounded-md px-8 text-base" data-testid="button-view-services">
                    <a className="flex items-center justify-center" href="#servicios">
                      Ver Servicios <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                </button>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
                <div className="w-1.5 h-3 bg-gray-300 rounded-full mx-auto">
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}