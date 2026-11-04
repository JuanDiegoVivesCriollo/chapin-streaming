"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Galeria() {
  // Imágenes reales de películas y series populares
  const contenido = [
    {
      titulo: "Stranger Things",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/strangerthings.webp",
    },
    {
      titulo: "Breaking Bad",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/breakingbad.webp",
    },
    {
      titulo: "The Witcher",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/Thewitcher.webp",
    },
    {
      titulo: "The Mandalorian",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/Themandalorian.webp",
    },
    {
      titulo: "The Last of Us",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/thelastofus.webp",
    },
    {
      titulo: "The Boys",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/theboys.webp",
    },
    {
      titulo: "Euphoria",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/euphoria.webp",
    },
    {
      titulo: "Chernobyl",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/chernobyl.webp",
    },
    {
      titulo: "Ted Lasso",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/TedLasso.webp",
    },
    {
      titulo: "Jujutsu Kaisen",
      tipo: "Anime",
      imagen: "/images/posterpeliculas/jujutsukaisen.webp",
    },
    {
      titulo: "Halo",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/halo.webp",
    },
    {
      titulo: "The Walking Dead",
      tipo: "Serie",
      imagen: "/images/posterpeliculas/Thewlkingdead.webp",
    },
  ];

  return (
    <section
      className="py-20 section-bg"
      style={{ backgroundImage: "url(/images/gallery-bg.jpg)" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Contenido Destacado
          </h2>
          <p className="text-xl text-gray-300">
            Películas, series y más en la mejor calidad
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contenido.map((item, index) => (
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
                scale: 1.03,
                y: -5,
                transition: { duration: 0.15 },
              }}
              className="relative aspect-[2/3] bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-primary-600/60 transition-all duration-500 shadow-lg hover:shadow-primary-600/40 group"
            >
              {/* Imagen del contenido */}
              <Image
                src={item.imagen}
                alt={item.titulo}
                title={`${item.titulo} - ${item.tipo} en ChapinTV`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
              />

              {/* Overlay en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-semibold text-lg">
                    {item.titulo}
                  </p>
                  <p className="text-primary-400 text-sm font-medium">
                    {item.tipo} • HD/FHD/4K
                  </p>
                </div>
              </div>

              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Badge de tipo de contenido */}
              <div className="absolute top-2 right-2 bg-primary-600/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.tipo}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.5,
            duration: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Y mucho más... ¡Miles de títulos esperándote!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
