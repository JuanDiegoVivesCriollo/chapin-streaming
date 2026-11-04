"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "50249757016";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero más información sobre ChapinTV"
  );

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Detectar si es dispositivo móvil
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let url;
    if (isMobile) {
      // En móvil, usar wa.me para abrir la app
      url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    } else {
      // En desktop, usar web.whatsapp.com
      url = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    }

    window.open(url, "_blank");
  };

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      onClick={handleWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-colors duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        ¡Chatea con nosotros!
      </span>

      {/* Pulso animado */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </motion.a>
  );
}
