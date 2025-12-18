import ProjectCard from "./ProjectCard"
import projectsData from "../data/projects.json"

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 md:py-32 lg:py-40 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black" data-testid="text-portfolio-title">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Proyectos exitosos desarrollados para nuestros clientes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}