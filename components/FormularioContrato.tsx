"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, MessageSquare, Send } from "lucide-react";

interface FormularioContratoProps {
  isOpen: boolean;
  onClose: () => void;
  planSeleccionado?: {
    nombre: string;
    precio: string;
    centavos: string;
  };
}

export default function FormularioContrato({
  isOpen,
  onClose,
  planSeleccionado,
}: FormularioContratoProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "50249757016";
    let mensaje = `¡Hola! Me gustaría contratar ChapinTV\n\n`;

    if (planSeleccionado) {
      mensaje += `📦 *Plan seleccionado:* ${planSeleccionado.nombre}\n`;
      mensaje += `💰 *Precio:* $${planSeleccionado.precio}.${planSeleccionado.centavos}\n\n`;
    }

    mensaje += `👤 *Nombre:* ${formData.nombre}\n`;
    mensaje += `📧 *Email:* ${formData.email}\n`;
    mensaje += `📱 *Teléfono:* ${formData.telefono}\n`;

    if (formData.mensaje) {
      mensaje += `\n💬 *Mensaje adicional:*\n${formData.mensaje}`;
    }

    // Detectar si es dispositivo móvil
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    let url;
    if (isMobile) {
      // En móvil, usar wa.me para abrir la app
      url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        mensaje
      )}`;
    } else {
      // En desktop, usar web.whatsapp.com
      url = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
        mensaje
      )}`;
    }

    window.open(url, "_blank");

    // Limpiar formulario y cerrar
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-primary-700 p-6 rounded-t-2xl flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Contratar Plan
                  </h2>
                  {planSeleccionado && (
                    <p className="text-primary-100 text-sm mt-1">
                      {planSeleccionado.nombre} - ${planSeleccionado.precio}.
                      {planSeleccionado.centavos}
                    </p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Nombre */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                    <User className="w-4 h-4 text-primary-500" />
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                    <Mail className="w-4 h-4 text-primary-500" />
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                    <Phone className="w-4 h-4 text-primary-500" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300"
                    placeholder="+502 1234 5678"
                  />
                </div>

                {/* Mensaje adicional */}
                <div>
                  <label className="flex items-center gap-2 text-gray-300 mb-2 font-semibold">
                    <MessageSquare className="w-4 h-4 text-primary-500" />
                    Mensaje adicional (opcional)
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 resize-none"
                    placeholder="¿Alguna pregunta o comentario?"
                  />
                </div>

                {/* Botón Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary-600/50 transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </motion.button>

                <p className="text-gray-500 text-sm text-center">
                  Se abrirá WhatsApp con tu información para completar la
                  contratación
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
