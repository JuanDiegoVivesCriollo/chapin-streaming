"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Servicios() {
  const servicios = [
    { nombre: "Netflix", logo: "/images/logosservicios/netflix.svg" },
    { nombre: "Disney+", logo: "/images/logosservicios/disneyplus.svg" },
    { nombre: "Prime Video", logo: "/images/logosservicios/primevideo.svg" },
    { nombre: "Max", logo: "/images/logosservicios/habo max.svg" },
    { nombre: "Paramount+", logo: "/images/logosservicios/paramount.svg" },
    { nombre: "Apple TV+", logo: "/images/logosservicios/appletv.svg" },
    { nombre: "Spotify", logo: "/images/logosservicios/spotify.svg" },
    { nombre: "Crunchyroll", logo: "/images/logosservicios/crunchyroll.svg" },
    { nombre: "TIDAL", logo: "/images/logosservicios/tidal.svg" },
    { nombre: "Rakuten VIKI", logo: "/images/logosservicios/rakutenviki.svg" },
    { nombre: "ViX Premium", logo: "/images/logosservicios/vixpremium.svg" },
    { nombre: "Claro Video", logo: "/images/logosservicios/clarovideo.svg" },
    { nombre: "DGO", logo: "/images/logosservicios/directvgo.svg" },
    { nombre: "Plex", logo: "/images/logosservicios/plex.svg" },
    {
      nombre: "Movistar Play",
      logo: "/images/logosservicios/movistarplay.svg",
    },
    { nombre: "Pornhub Premium", logo: "/images/logosservicios/pornhub.svg" },
    {
      nombre: "YouTube Premium",
      logo: "/images/logosservicios/youtubepremium.svg",
    },
    { nombre: "Like TV", logo: "/images/logochapinv.webp" },
  ];

  return (
    <section
      id="servicios"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/98 via-[#0D0D0D]/95 to-[#0D0D0D]/98" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          {/* Contenedor con fondo semitransparente */}
          <div className="bg-gradient-to-br from-gray-900/90 via-black/85 to-gray-900/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gray-800/50 shadow-2xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 150,
              }}
              className="inline-flex items-center gap-2 bg-primary-600/30 border border-primary-600/50 rounded-full px-6 py-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-primary-400 animate-pulse" />
              <span className="text-primary-200 font-semibold">
                Acceso Total a Plataformas Premium
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent leading-tight">
              Todos los Servicios de Streaming
              <br />
              <span className="text-primary-400">en un Solo Lugar</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Disfruta de las mejores plataformas de entretenimiento mundial sin
              límites
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: index * 0.03,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.15 },
              }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md rounded-2xl border border-gray-800 shadow-xl overflow-hidden hover:border-primary-600/70 hover:shadow-primary-600/40 transition-all duration-500 aspect-square relative">
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 z-10" />

                {/* Logo real del servicio - Rellena completamente */}
                <div className="absolute inset-0">
                  <Image
                    src={servicio.logo}
                    alt={servicio.nombre}
                    title={`${servicio.nombre} disponible en ChapinTV`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>

                {/* Efecto de partículas en hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
                  }}
                />
              </div>

              {/* Tooltip en hover */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 px-3 py-1 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20"
              >
                {servicio.nombre}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Texto adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Y muchas más plataformas incluidas en tu suscripción.{" "}
            <span className="text-primary-400 font-semibold">
              ¡Todo en calidad premium!
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
