export default function Services() {
    // ⚠️ Reemplaza con tu número de WhatsApp (formato internacional, sin + ni espacios ni guiones)
  const phoneNumber = '5219843186500'; // Ejemplo: México +52 1 234 567 890 → "521234567890"
  
  // Mensaje personalizado (URL-encoded)
  const message = encodeURIComponent('¡Hola! Estoy interesado en tus servicios de desarrollo de páginas web. ¿Podrías darme más información?');

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
  <section id="servicios" className="py-20 md:py-32 lg:py-40 bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black" data-testid="text-services-title">Nuestros Servicios</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-services-description">Ofrecemos soluciones de desarrollo completas para impulsar tu negocio</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="shadcn-card rounded-xl text-card-foreground shadow-sm border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white" data-testid="card-service-0">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe h-7 w-7 text-black"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
              </div>
              <div className="tracking-tight text-2xl font-semibold text-black">
                Páginas Web
              </div>
            </div>
            <div className="p-6 pt-0 space-y-6">
              <div className="text-base leading-relaxed text-gray-600">
                Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para SEO. Desde landing pages hasta portales corporativos complejos.
              </div>
                <div className="flex flex-wrap gap-2">
                    <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-0-0">
                      React
                    </div>
                    <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-0-1">
                      Next.js
                    </div>
                    <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-0-2">
                      Tailwind CSS
                    </div>
                    <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-0-3">
                      TypeScript
                    </div>
                </div>
                    <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent min-h-9 px-4 py-2 w-full mt-4" data-testid="button-more-info-0">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Más información</a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                    </div>
                    </div>
                    <div className="shadcn-card rounded-xl text-card-foreground shadow-sm border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white" data-testid="card-service-1">
                      <div className="flex flex-col space-y-1.5 p-6">
                          <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor h-7 w-7 text-black"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                          </div>
                        <div className="tracking-tight text-2xl font-semibold text-black">
                          Aplicaciones Web
                        </div>
                      </div>
                      <div className="p-6 pt-0 space-y-6">
                          <div className="text-base leading-relaxed text-gray-600">
                          Desarrollamos aplicaciones web escalables y seguras con las últimas tecnologías. Sistemas de gestión, dashboards, e-commerce y más.
                          </div>
                          <div className="flex flex-wrap gap-2">
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-1-0">
                                Node.js
                              </div>
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-1-1">
                                PostgreSQL
                              </div>
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-1-2">
                                Express
                              </div>
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-1-3">
                                React
                              </div>
                          </div>
                          <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent min-h-9 px-4 py-2 w-full mt-4" data-testid="button-more-info-1">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Más información</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                          </button>
                      </div>
                    </div>
                    <div className="shadcn-card rounded-xl text-card-foreground shadow-sm border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-white" data-testid="card-service-2">
                        <div className="flex flex-col space-y-1.5 p-6">
                          <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smartphone h-7 w-7 text-black"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path>
                            </svg>
                          </div>
                          <div className="tracking-tight text-2xl font-semibold text-black">
                            Aplicaciones Nativas
                          </div>
                        </div>
                        <div className="p-6 pt-0 space-y-6">
                          <div className="text-base leading-relaxed text-gray-600">
                            Creamos aplicaciones móviles nativas para iOS y Android con experiencias de usuario excepcionales y rendimiento óptimo.
                          </div>
                          <div className="flex flex-wrap gap-2">
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-2-0">
                                React Native
                              </div>
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-2-1">
                                Flutter
                              </div>
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-2-2">
                                Swift
                              </div>
                              <div className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent font-semibold text-xs bg-gray-100 text-black border-0" data-testid="badge-tech-2-3">
                                Kotlin
                              </div>
                          </div>
                            <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent min-h-9 px-4 py-2 w-full mt-4" data-testid="button-more-info-2">
                              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Más información</a>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </button>
                        </div>
                    </div>
        </div>
      </div>
  </section>
  )
}