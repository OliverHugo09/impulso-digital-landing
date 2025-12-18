export default function Banner() {
  return (
    <section className="py-20 md:py-32 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-black" data-testid="text-trust-title">Respaldados por la Excelencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="shadcn-card rounded-xl text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-2 border-gray-200 bg-white" data-testid="card-stat-0">
              <div className="p-10 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-building2 h-8 w-8 text-black"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path>
                  </svg>
                </div>
                  <div className="text-6xl md:text-7xl font-bold text-black mb-4" data-testid="text-stat-value-0">
                    100+
                  </div>
                  <p className="text-gray-600 text-base" data-testid="text-stat-label-0">Empresas confían en nosotros</p>
              </div>
            </div>
                <div className="shadcn-card rounded-xl text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-2 border-gray-200 bg-white" data-testid="card-stat-1">
                  <div className="p-10 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-code-xml h-8 w-8 text-black"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path>
                      </svg>
                    </div>
                      <div className="text-6xl md:text-7xl font-bold text-black mb-4" data-testid="text-stat-value-1">
                        20+
                      </div>
                      <p className="text-gray-600 text-base" data-testid="text-stat-label-1">Tecnologías dominadas</p>
                  </div>
                </div>
                  <div className="shadcn-card rounded-xl text-card-foreground shadow-sm hover:shadow-lg transition-shadow border-2 border-gray-200 bg-white" data-testid="card-stat-2">
                    <div className="p-10 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar h-8 w-8 text-black"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>
                        </svg>
                      </div>
                        <div className="text-6xl md:text-7xl font-bold text-black mb-4" data-testid="text-stat-value-2">
                          3+
                        </div>
                        <p className="text-gray-600 text-base" data-testid="text-stat-label-2">Años de experiencia</p>
                    </div>
                  </div>
          </div>
      </div>
    </section>
  )
}