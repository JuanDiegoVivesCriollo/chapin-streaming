"use client";

import { motion } from "framer-motion";
import { Tv, Film, Users, Wifi, Star, Shield } from "lucide-react";

export default function PorQueElegir() {
  const features = [
    {
      icon: Tv,
      title: "Más de 4,000 canales en vivo",
      description:
        "Disfruta de una variedad increíble de canales nacionales e internacionales",
    },
    {
      icon: Film,
      title: "Más de 59,000 películas y series",
      description:
        "Desde los últimos estrenos hasta clásicos inolvidables, siempre tendrás algo nuevo para ver",
    },
    {
      icon: Users,
      title: "Cada cuenta para 4 dispositivos",
      description: "Comparte tu entretenimiento con familiares o amigos",
    },
    {
      icon: Wifi,
      title: "Servidor estable",
      description:
        "Olvídate de cortes y buffering. Nuestra tecnología garantiza una experiencia fluida",
    },
    {
      icon: Star,
      title: "Paquetes premium incluidos",
      description: "Accede a contenido exclusivo sin costos adicionales",
    },
    {
      icon: Shield,
      title: "Soporte 24/7",
      description: "Estamos aquí para ayudarte en cualquier momento",
    },
  ];

  return (
    <section
      className="py-20 section-bg"
      style={{
        backgroundImage: "url(/images/features-bg.jpg)",
      }}
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
            ¿Por qué elegir Chapin?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            La mejor experiencia de streaming con características premium
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.15 },
              }}
              className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-primary-600/60 hover:shadow-primary-600/30 transition-all duration-500 group"
            >
              <motion.div
                className="bg-primary-600/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-primary-600/50 group-hover:border-primary-500/80 transition-all duration-300"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)",
                  transition: { duration: 0.5 },
                }}
              >
                <feature.icon className="w-8 h-8 text-primary-500 group-hover:text-primary-400 transition-colors duration-300" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
