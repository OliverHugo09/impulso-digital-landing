export default function Footer() {
  return (
  <footer className="bg-gray-50 border-t-2 border-gray-200">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">Impulso Digital</h3>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">Transformamos ideas en soluciones digitales de alta calidad para empresas de todos los tamaños.</p>
{/*             <div className="flex gap-2">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent h-9 w-9" data-testid="button-social-github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent h-9 w-9" data-testid="button-social-linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent h-9 w-9" data-testid="button-social-twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter h-5 w-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </button>
            </div> */}
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg text-black">Servicios</h4>
          <ul className="space-y-3 text-base text-gray-600">
            <li><a href="#servicios" className="hover:text-black transition-colors">Páginas Web</a></li>
            <li><a href="#servicios" className="hover:text-black transition-colors">Aplicaciones Web</a></li>
            <li><a href="#servicios" className="hover:text-black transition-colors">Aplicaciones Nativas</a></li>
            <li><a href="#ai-generator" className="hover:text-black transition-colors">Generador de Propuestas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-lg text-black">Catálogo</h4>
            <ul className="space-y-3 text-base text-gray-600">
              <li><a href="#catalog" className="hover:text-black transition-colors">ISPs</a></li>
              <li><a href="#catalog" className="hover:text-black transition-colors">Nómina</a></li>
              <li><a href="#catalog" className="hover:text-black transition-colors">E-commerce</a></li>
              <li><a href="#catalog" className="hover:text-black transition-colors">Delivery</a></li>
            </ul>
        </div>
{/*         <div>
          <h4 className="font-semibold mb-4 text-lg text-black">Newsletter</h4>
          <p className="text-base text-gray-600 mb-4">Recibe noticias y actualizaciones sobre desarrollo web</p>
          <form className="flex gap-2">
            <input type="email" className="flex h-9 w-full rounded-md bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1 border-2 border-gray-200" placeholder="tu@email.com" data-testid="input-newsletter"/>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border h-9 w-9" type="submit" data-testid="button-newsletter-submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </button>
          </form>
        </div> */}
      </div>
      <div className="border-t-2 border-gray-200 pt-8 text-center">
        <p className="text-sm text-gray-600 font-medium">© 2025 Impulso Digital. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
  )
}