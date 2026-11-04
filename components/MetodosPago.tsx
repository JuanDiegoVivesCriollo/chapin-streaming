"use client";

import { motion } from "framer-motion";
import { CreditCard, Shield } from "lucide-react";
import Image from "next/image";

export default function MetodosPago() {
  const metodosPago = [
    {
      nombre: "Visa",
      logo: "/images/logospagos/visa-10.svg",
    },
    {
      nombre: "Mastercard",
      logo: "/images/logospagos/mastercard-6.svg",
    },
    {
      nombre: "American Express",
      logo: "/images/logospagos/american-express-1.svg",
    },
    {
      nombre: "Apple Pay",
      logo: "/images/logospagos/apple-pay-2.svg",
    },
    {
      nombre: "Google Pay",
      logo: "/images/logospagos/google-pay-2.svg",
    },
    {
      nombre: "Zelle",
      logo: "/images/logospagos/zelle-1.svg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#0D0D0D] via-gray-900/50 to-[#0D0D0D] border-y border-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-600/40 rounded-full px-6 py-2 mb-4">
            <Shield className="w-4 h-4 text-primary-400" />
            <span className="text-primary-300 text-sm font-semibold">
              Pago Seguro y Confiable
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Métodos de Pago Aceptados
          </h2>
          <p className="text-gray-400 text-lg">
            Acepta todas las formas de pago principales
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 max-w-5xl mx-auto">
          {metodosPago.map((metodo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.3,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                transition: { duration: 0.15 },
              }}
              className="relative group"
            >
              <div className="bg-white/95 hover:bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary-400">
                <div className="relative w-32 h-24">
                  <Image
                    src={metodo.logo}
                    alt={metodo.nombre}
                    title={`Aceptamos ${metodo.nombre}`}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Tooltip */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 px-3 py-1 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {metodo.nombre}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje de seguridad */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <CreditCard className="w-5 h-5 text-primary-500" />
            <span className="text-sm">
              Todos los pagos son procesados de forma segura y encriptada
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
