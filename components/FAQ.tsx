"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      categoria: "¿En qué consiste?",
      preguntas: [
        {
          pregunta: "¿Qué es ChapinTV?",
          respuesta:
            "ChapinTV es un servicio de streaming premium que te ofrece acceso a más de 4,000 canales en vivo, 59,000 películas y 8,000 series en alta calidad (HD/FHD/4K). Puedes disfrutar de todo este contenido en hasta 4 dispositivos simultáneamente.",
        },
        {
          pregunta: "¿Qué tipo de contenido puedo ver?",
          respuesta:
            "Tenemos canales de televisión en vivo de todo el mundo, películas desde los últimos estrenos hasta clásicos, series de diferentes géneros, eventos deportivos en vivo, contenido PPV y mucho más. Todo organizado para que encuentres fácilmente lo que buscas.",
        },
      ],
    },
    {
      categoria: "Precio",
      preguntas: [
        {
          pregunta: "¿Cuáles son los planes disponibles?",
          respuesta:
            "Ofrecemos planes de 1 mes ($9.99), 3 meses ($24.99), 6 meses ($44.99) con 1 mes adicional gratis, y 12 meses ($69.99) con 2 meses adicionales gratis. Todos los planes incluyen acceso completo a todo el contenido y hasta 4 dispositivos.",
        },
        {
          pregunta: "¿Los precios varían por región?",
          respuesta:
            "Sí, contamos con precios especiales para diferentes regiones como USA, Argentina y Ecuador. También tenemos planes especiales para revendedores. Contacta con nosotros para conocer los precios específicos de tu región.",
        },
      ],
    },
    {
      categoria: "Aplicaciones",
      preguntas: [
        {
          pregunta: "¿En qué dispositivos puedo usar ChapinTV?",
          respuesta:
            "Puedes usar ChapinTV en Android (mediante APK), iOS (App Store), Smart TV, TV Box, Firestick y más. Tenemos aplicaciones compatibles con la mayoría de dispositivos del mercado.",
        },
        {
          pregunta: "¿Cómo instalo la aplicación?",
          respuesta:
            "Para Android, descarga cualquiera de nuestras APKs. Para iOS, descarga desde la App Store. Para Smart TV, usa el link http://liketv.pro:80. Para TV Box o Firestick, usa los códigos Downloader que proporcionamos: 182126, 375758, 627816, o 453917.",
        },
      ],
    },
    {
      categoria: "Métodos de Pago",
      preguntas: [
        {
          pregunta: "¿Qué métodos de pago aceptan?",
          respuesta:
            "Aceptamos múltiples métodos de pago incluyendo tarjetas de crédito/débito, PayPal, transferencias bancarias y otros métodos locales según tu región. Contacta con nosotros para más detalles sobre métodos de pago disponibles.",
        },
      ],
    },
    {
      categoria: "Reembolsos y Cancelaciones",
      preguntas: [
        {
          pregunta: "¿Puedo cancelar mi suscripción?",
          respuesta:
            "Sí, puedes cancelar tu suscripción en cualquier momento. Si cancelas, tendrás acceso al servicio hasta que termine tu periodo de pago actual.",
        },
        {
          pregunta: "¿Ofrecen reembolsos?",
          respuesta:
            "Los reembolsos se evalúan caso por caso. Si tienes problemas técnicos que no podemos resolver, contacta con nuestro soporte para revisar tu situación particular.",
        },
      ],
    },
    {
      categoria: "Baneos",
      preguntas: [
        {
          pregunta: "¿Por qué podría ser baneada mi cuenta?",
          respuesta:
            "Las cuentas pueden ser suspendidas por compartir credenciales más allá del límite de 4 dispositivos, uso indebido del servicio, o violación de nuestros términos de servicio.",
        },
      ],
    },
    {
      categoria: "Pruebas gratuitas",
      preguntas: [
        {
          pregunta: "¿Ofrecen prueba gratuita?",
          respuesta:
            "Sí, ofrecemos un demo gratuito de 2 HORAS. Descarga la aplicación y solicita tus credenciales de prueba para experimentar nuestro servicio sin compromiso.",
        },
        {
          pregunta: "¿Necesito tarjeta de crédito para la prueba?",
          respuesta:
            "No, la prueba gratuita de 2 horas no requiere tarjeta de crédito. Solo descarga la app y solicita tus credenciales de prueba.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let preguntaIndex = 0;

  return (
    <section
      id="faq"
      className="py-20 section-bg"
      style={{ backgroundImage: "url(/images/faq-bg.jpg)" }}
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
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-300">
            Encuentra respuestas a las dudas más comunes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((categoria, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                delay: catIndex * 0.05,
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-primary-500" />
                <h3 className="text-2xl font-bold text-primary-400">
                  {categoria.categoria}
                </h3>
              </div>

              <div className="space-y-4">
                {categoria.preguntas.map((faq) => {
                  const currentIndex = preguntaIndex++;
                  return (
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.1,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 120,
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md rounded-xl border border-gray-800 overflow-hidden hover:border-primary-600/60 hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-500"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors duration-300 group"
                      >
                        <span className="text-lg font-semibold pr-4 group-hover:text-primary-400 transition-colors duration-300">
                          {faq.pregunta}
                        </span>
                        <motion.div
                          animate={{
                            rotate: openIndex === currentIndex ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.4,
                            type: "spring",
                            stiffness: 200,
                          }}
                        >
                          <ChevronDown className="w-6 h-6 text-primary-500 flex-shrink-0 group-hover:text-primary-400 transition-colors duration-300" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openIndex === currentIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-gray-800"
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {faq.respuesta}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
