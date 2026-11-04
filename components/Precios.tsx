"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import FormularioContrato from "./FormularioContrato";

export default function Precios() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<
    | {
        nombre: string;
        precio: string;
        centavos: string;
      }
    | undefined
  >();

  const handleContratarClick = (plan: {
    nombre: string;
    precio: string;
    centavos: string;
  }) => {
    setSelectedPlan(plan);
    setIsFormOpen(true);
  };
  const planes = [
    {
      nombre: "1 MES",
      precio: "12",
      centavos: "00",
      destacado: false,
      badge: "",
      caracteristicas: [
        "+ 4,000 Canales",
        "+ 59,000 Películas",
        "+ 8,000 Series",
        "Deportes y eventos PPV",
        "Contenido HD / FHD / 4K",
        "Soporte 24/7",
      ],
    },
    {
      nombre: "3 MESES",
      precio: "30",
      centavos: "00",
      destacado: false,
      badge: "",
      caracteristicas: [
        "+ 4,000 Canales",
        "+ 59,000 Películas",
        "+ 8,000 Series",
        "Deportes y eventos PPV",
        "Contenido HD / FHD / 4K",
        "Soporte 24/7",
      ],
    },
    {
      nombre: "6 MESES",
      precio: "50",
      centavos: "00",
      destacado: true,
      badge: "+1 MES",
      caracteristicas: [
        "+ 4,000 Canales",
        "+ 59,000 Películas",
        "+ 8,000 Series",
        "Deportes y eventos PPV",
        "Contenido HD / FHD / 4K",
        "Soporte 24/7",
      ],
    },
    {
      nombre: "12 MESES",
      precio: "85",
      centavos: "00",
      destacado: true,
      badge: "+2 MESES",
      caracteristicas: [
        "+ 4,000 Canales",
        "+ 59,000 Películas",
        "+ 8,000 Series",
        "Deportes y eventos PPV",
        "Contenido HD / FHD / 4K",
        "Soporte 24/7",
      ],
    },
  ];

  return (
    <section
      id="precios"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay con gradiente para mejor legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/90 to-[#0D0D0D]/95" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-600/20 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-primary-600/50">
            ⚡ OFERTAS EXCLUSIVAS POR TIEMPO LIMITADO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Planes y Precios
          </h2>
          <p className="text-xl text-gray-300">
            Hasta 4 Dispositivos por cuenta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {planes.map((plan, index) => (
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
              className={`relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md rounded-2xl border shadow-2xl overflow-hidden transition-all duration-500 group ${
                plan.destacado
                  ? "border-primary-500 shadow-primary-500/40 ring-2 ring-primary-500/20"
                  : "border-gray-800 hover:border-primary-600/60 hover:shadow-primary-600/20"
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-yellow-600 text-dark-900 px-4 py-1 rounded-bl-lg font-bold text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.nombre}</h3>
                <p className="text-gray-400 mb-6">Hasta 4 Dispositivos</p>

                <div className="mb-8">
                  <div className="flex items-start justify-center mb-2">
                    <span className="text-2xl font-bold mt-2">$</span>
                    <span className="text-6xl font-bold">{plan.precio}</span>
                    <span className="text-2xl font-bold mt-2">
                      {plan.centavos}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.caracteristicas.map((caracteristica, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => handleContratarClick(plan)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.destacado
                      ? "bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-lg shadow-primary-600/50"
                      : "bg-primary-600 hover:bg-primary-700 text-white"
                  }`}
                >
                  {plan.destacado && <Zap className="w-5 h-5 fill-current" />}
                  Contratar
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-12"
        >
          * Todos los planes incluyen acceso completo a todo el contenido
        </motion.p>
      </div>

      <FormularioContrato
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        planSeleccionado={selectedPlan}
      />
    </section>
  );
}
