"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, DollarSign } from "lucide-react";
import Image from "next/image";
import FormularioContrato from "./FormularioContrato";

export default function PreciosRegionales() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const handleInfoClick = (nombreRegion: string) => {
    setSelectedRegion(nombreRegion);
    setIsFormOpen(true);
  };
  const regiones = [
    {
      nombre: "PRECIO EN USA",
      imagen: "",
      descripcion: "Planes especiales para Estados Unidos",
    },
    {
      nombre: "PRECIO RESELLER",
      imagen: "/images/precioporregionreseller.PNG",
      descripcion: "Planes mayoristas para revendedores",
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1920&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/85 to-[#0D0D0D]/95" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Precios por Región
          </h2>
          <p className="text-xl text-gray-300">
            Planes adaptados a tu ubicación con los mejores precios
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {regiones.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.15 },
              }}
              className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl overflow-hidden hover:border-primary-600/60 hover:shadow-primary-600/30 transition-all duration-500 group"
            >
              <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-primary-900/20 to-gray-900 overflow-hidden">
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-10" />

                {/* Mostrar imagen solo para PRECIO RESELLER */}
                {region.imagen ? (
                  <>
                    <Image
                      src={region.imagen}
                      alt={region.nombre}
                      title={region.nombre}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-primary-800/30 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-primary-400 opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary-400 transition-colors duration-300">
                  <DollarSign className="w-5 h-5 text-primary-500" />
                  {region.nombre}
                </h3>
                <p className="text-gray-400 mb-4">{region.descripcion}</p>
                <motion.button
                  onClick={() => handleInfoClick(region.nombre)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Más Información
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FormularioContrato
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        planSeleccionado={
          selectedRegion
            ? {
                nombre: selectedRegion,
                precio: "Consultar",
                centavos: "00",
              }
            : undefined
        }
      />
    </section>
  );
}
