"use client";

import { motion } from "framer-motion";
import { Play, Star, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: "url(/images/fondoherosection.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mb-6"
          >
            <motion.span
              className="inline-flex items-center gap-2 bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary-600/50 mx-auto"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(239, 68, 68, 0.3)",
                  "0 0 25px rgba(239, 68, 68, 0.5)",
                  "0 0 10px rgba(239, 68, 68, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-4 h-4" />
              Streaming Premium
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              textShadow:
                "3px 3px 10px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.2)",
            }}
          >
            <span className="text-white">El Mejor Streaming</span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Sin Límites
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 90,
            }}
            className="text-xl md:text-2xl text-white font-medium mb-8"
            style={{
              textShadow: "1px 1px 6px rgba(0,0,0,0.9)",
            }}
          >
            Más de 4,000 canales en vivo, 59,000 películas y 8,000 series
            <br />
            Contenido HD, FHD y 4K con soporte 24/7
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#descargas"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 40px rgba(239, 68, 68, 0.8)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 transition-all duration-300 shadow-2xl shadow-primary-600/60"
              style={{
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              <Play className="w-5 h-5" />
              Probar Gratis
            </motion.a>
            <motion.a
              href="#precios"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.35)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 border-2 border-white/40 shadow-xl"
              style={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
              }}
            >
              Ver Precios
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="flex items-center justify-center gap-2 text-yellow-400"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div key={i}>
                  <Star className="w-5 h-5 fill-current" />
                </div>
              ))}
            </div>
            <span className="text-gray-300 ml-2">
              Más de 10,000 clientes satisfechos
            </span>
          </motion.div>
        </div>
      </div>

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 pointer-events-none" />
    </section>
  );
}
