// src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project }) {
  const { client, title, description, image, technologies, url } = project;

  return (
    <div className="rounded-xl text-card-foreground shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 bg-white group">
      <div className="relative overflow-hidden aspect-video bg-gray-100">
        <img
          src={image}
          alt={`Preview de ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Solo muestra el botón si `url` existe y no está vacío */}
        {url && (
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 min-h-9 px-4 py-2 w-full"
              data-testid={`button-view-project-${project.id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link mr-2 h-4 w-4"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              Ver Proyecto
            </a>
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm text-gray-500 font-medium" data-testid={`text-portfolio-client-${project.id}`}>
              {client}
            </p>
            <h3 className="text-xl font-semibold text-black" data-testid={`text-portfolio-title-${project.id}`}>
              {title}
            </h3>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed" data-testid={`text-portfolio-description-${project.id}`}>
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="whitespace-nowrap inline-flex items-center rounded-md px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent font-medium text-xs bg-gray-100 text-black"
              data-testid={`badge-portfolio-tech-${project.id}-${index}`}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}