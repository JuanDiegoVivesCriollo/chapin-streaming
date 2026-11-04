"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import FormularioContrato from "./FormularioContrato";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Descargas", href: "#descargas" },
    { name: "Precios", href: "#precios" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-gray-800 shadow-lg"
          : "bg-[#0D0D0D]/80 backdrop-blur-sm border-b border-gray-800/30"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        {/* Desktop Layout - Logo centrado con enlaces a los lados */}
        <div className="hidden md:flex items-center justify-between">
          {/* Enlaces izquierda */}
          <div className="flex items-center space-x-8 flex-1 justify-end mr-12">
            <motion.a
              href="#inicio"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-primary-500 transition-colors duration-300 font-medium"
            >
              Inicio
            </motion.a>
            <motion.a
              href="#descargas"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-primary-500 transition-colors duration-300 font-medium"
            >
              Descargas
            </motion.a>
          </div>

          {/* Logo centrado */}
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.05 }}
            className="flex items-center flex-shrink-0"
          >
            <Image
              src="/images/logochapinv.webp"
              alt="ChapinTV"
              title="ChapinTV - Streaming Premium"
              width={450}
              height={150}
              className="h-44 w-auto"
              priority
            />
          </motion.a>

          {/* Enlaces derecha */}
          <div className="flex items-center space-x-8 flex-1 ml-12">
            <motion.a
              href="#precios"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-primary-500 transition-colors duration-300 font-medium"
            >
              Precios
            </motion.a>
            <motion.a
              href="#faq"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-primary-500 transition-colors duration-300 font-medium"
            >
              FAQ
            </motion.a>
            <motion.a
              href="#precios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors duration-300 font-semibold"
            >
              Contratar
            </motion.a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between w-full px-2">
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.05 }}
            className="flex items-center flex-shrink-0"
          >
            <Image
              src="/images/logochapinv.webp"
              alt="ChapinTV"
              title="ChapinTV - Streaming Premium"
              width={320}
              height={107}
              className="h-24 w-auto"
              priority
            />
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 flex-shrink-0"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-primary-500 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#precios"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full text-center transition-colors duration-300"
            >
              Contratar
            </a>
          </motion.div>
        )}
      </nav>

      <FormularioContrato
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </motion.header>
  );
}
