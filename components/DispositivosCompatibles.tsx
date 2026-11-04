"use client";

import Image from "next/image";

export default function DispositivosCompatibles() {
  const dispositivos = [
    { nombre: "Android", logo: "/images/dispositivos/android.svg" },
    { nombre: "Android TV", logo: "/images/dispositivos/androidtv.svg" },
    { nombre: "Amazon", logo: "/images/dispositivos/amazon.svg" },
    { nombre: "Fire TV", logo: "/images/dispositivos/firetv.svg" },
    { nombre: "Roku", logo: "/images/dispositivos/roku.svg" },
    { nombre: "LG Smart TV", logo: "/images/dispositivos/lgsmarttv.svg" },
    { nombre: "LG webOS", logo: "/images/dispositivos/LgWebOs.svg" },
    { nombre: "iOS", logo: "/images/dispositivos/IOS.svg" },
    { nombre: "Apple TV 4K", logo: "/images/dispositivos/AppleTv4k.svg" },
    { nombre: "Samsung", logo: "/images/dispositivos/Samsung.svg" },
    {
      nombre: "Samsung Smart TV",
      logo: "/images/dispositivos/samsungsmarttv.svg",
    },
  ];

  // Duplicamos el array para hacer el loop infinito seamless
  const dispositivosDuplicados = [...dispositivos, ...dispositivos];

  return (
    <section className="py-8 bg-gradient-to-r from-[#0D0D0D] via-gray-900 to-[#0D0D0D] border-y border-gray-800/50 overflow-hidden">
      <div className="relative">
        {/* Gradientes laterales para efecto de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10" />

        {/* Contenedor animado */}
        <div className="flex gap-8 animate-scroll-fast md:animate-scroll-slow hover:pause">
          {dispositivosDuplicados.map((dispositivo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative w-20 h-20 hover:scale-110 transition-all duration-300">
                <Image
                  src={dispositivo.logo}
                  alt={dispositivo.nombre}
                  title={`Compatible con ${dispositivo.nombre}`}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
