export default function CatalogoApp() {
    return(
        <section id="catalog" className="py-20 md:py-32 lg:py-40 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="text-center">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black" data-testid="text-catalog-title">Catálogo de Aplicaciones</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">Aplicaciones listas para usar organizadas por industria</p>
                    <p className="text-2xl text-gray-400 font-medium">Próximamente aquí</p>
                </div>
            </div>
        </section>
    )
}