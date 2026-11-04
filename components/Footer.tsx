"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="py-16 section-bg border-t border-dark-700"
      style={{ backgroundImage: "url(/images/footer-bg.jpg)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <Image
                src="/images/logochapinv.webp"
                alt="ChapinTV"
                width={200}
                height={93}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Tu mejor opción para streaming de entretenimiento premium. Miles
              de canales, películas y series a tu alcance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-dark-800 hover:bg-primary-600 p-2 rounded-full transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-dark-800 hover:bg-primary-600 p-2 rounded-full transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-dark-800 hover:bg-primary-600 p-2 rounded-full transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {["Inicio", "Descargas", "Precios", "FAQ", "Contacto"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Streaming en Vivo</li>
              <li>Películas On Demand</li>
              <li>Series de TV</li>
              <li>Deportes PPV</li>
              <li>Contenido 4K</li>
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>soporte@likechapin.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>+502 4975 7016</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>Soporte 24/7 en línea</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-dark-700 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2024 LikeChapin. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Términos de Servicio
              </a>
              <a
                href="#"
                className="hover:text-primary-500 transition-colors duration-300"
              >
                Política de Privacidad
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
