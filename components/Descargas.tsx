"use client";

import { motion } from "framer-motion";
import { Download, Tv, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Descargas() {
  const apks = [{ name: "Descargar APK", url: "http://aftv.news/7277399" }];
  const downloaderCodes = ["7277399"];
  const smartTvLinks = ["http://family-tv.org:80", "http://liketv.pro:80"];

  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section
      id="descargas"
      className="py-20 section-bg"
      style={{
        backgroundImage: "url(/images/download-bg.jpg)",
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
            Prueba ChapinTV Ahora
          </h2>
          <p className="text-xl text-gray-300">
            Descarga la app y solicita un demo de 2 HORAS GRATIS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Android APKs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              delay: 0.1,
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.15 },
            }}
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-primary-600/60 hover:shadow-primary-600/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"
                  fill="#3DDC84"
                />
              </svg>
              <h3 className="text-2xl font-bold">Para Android</h3>
            </div>
            <motion.a
              href={apks[0].url}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full"
            >
              <Download className="w-5 h-5" />
              {apks[0].name}
            </motion.a>
          </motion.div>

          {/* iOS App Store */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              delay: 0.2,
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.15 },
            }}
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-primary-600/60 hover:shadow-primary-600/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                  fill="#ffffff"
                />
              </svg>
              <h3 className="text-2xl font-bold">Para iOS</h3>
            </div>
            <motion.a
              href="https://apps.apple.com/in/app/iptv-smarters-player-lite/id6505038741"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(239, 68, 68, 0.6)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-lg text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Descargar para iOS
            </motion.a>
          </motion.div>

          {/* Smart TV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.15 },
            }}
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-primary-600/60 hover:shadow-primary-600/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <Tv className="w-8 h-8 text-primary-500" />
              <h3 className="text-2xl font-bold">Para Smart TV</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Copia uno de los siguientes links:
            </p>
            <div className="space-y-3">
              {smartTvLinks.map((link, index) => (
                <div
                  key={index}
                  className="bg-dark-900/80 p-4 rounded-lg border border-dark-600 flex items-center justify-between gap-3"
                >
                  <code className="text-primary-400 text-sm md:text-base flex-1 break-all">
                    {link}
                  </code>
                  <motion.button
                    onClick={() => handleCopy(link)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                      copiedLink === link
                        ? "bg-green-600 text-white"
                        : "bg-primary-600 hover:bg-primary-700 text-white"
                    }`}
                  >
                    {copiedLink === link ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="hidden sm:inline">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copiar</span>
                      </>
                    )}
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Downloader Codes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              delay: 0.4,
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.15 },
            }}
            className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-primary-600/60 hover:shadow-primary-600/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <Download className="w-8 h-8 text-primary-500" />
              <h3 className="text-2xl font-bold">Códigos Downloader</h3>
            </div>
            <p className="text-gray-400 mb-4">Para TV Box o Firestick:</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(239, 68, 68, 0.5)",
                transition: { duration: 0.2 },
              }}
              className="bg-[#0D0D0D]/80 p-6 rounded-lg border border-gray-700 text-center hover:border-primary-500/60 transition-all duration-300 max-w-xs mx-auto"
            >
              <code className="text-primary-400 text-3xl font-bold">
                {downloaderCodes[0]}
              </code>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
