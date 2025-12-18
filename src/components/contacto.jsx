// src/components/Contacto.jsx
import React, { useState, useEffect } from 'react';

export default function Contacto() {
  const [copied, setCopied] = useState(false);

  // 🔒 Correo codificado para evitar que los bots lo extraigan fácilmente
  // Puedes cambiar esta lógica por cualquier método de ofuscación
  const encodedEmail = btoa('oliverlucero.dev@gmail.com'); // Codifica en Base64

  const handleCopyEmail = async () => {
    try {
      const email = atob(encodedEmail); // Decodifica en el momento del clic
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      console.error('Error al copiar el correo:', err);
      // Opcional: mostrar mensaje de error
    }
  };

  // Auto-ocultar mensaje después de 5 segundos
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <section id="contact" className="py-20 md:py-32 lg:py-40 bg-gray-50 border-y border-gray-200">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-black" data-testid="text-contact-title">
            Comienza tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
          </p>
        </div>
        <div className="shadcn-card rounded-xl text-card-foreground border-2 border-gray-200 bg-white shadow-none">
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8">
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
                className="lucide lucide-mail h-10 w-10 text-white"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-black">Escríbenos por correo electrónico</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Envíanos un correo con los detalles de tu proyecto y te responderemos en menos de 24 horas
            </p>
            <button
              onClick={handleCopyEmail}
              className="cursor-pointer bg-black text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-10 rounded-md px-8"
              data-testid="button-email-contact"
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
                className="lucide lucide-mail mr-2 h-5 w-5"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Copiar correo electrónico
            </button>

            {/* ✅ Notificación animada */}
            <div
              className={`fixed bottom-80 xl:bottom-120 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white font-medium transition-opacity duration-500 ${
                copied ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{ backgroundColor: '#10b981' }} // verde tailwind emerald-500
            >
              ¡Correo copiado correctamente!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}