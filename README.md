# LikeChapin - Plataforma de Streaming Premium

Una aplicación web moderna de streaming desarrollada con Next.js 15, diseñada para ofrecer la mejor experiencia de entretenimiento con más de 4,000 canales en vivo, 59,000 películas y 8,000 series.

## 🚀 Características

- **Next.js 15** con App Router y exportación estática
- **TypeScript** para type safety
- **Tailwind CSS** para estilos modernos y responsivos
- **Framer Motion** para animaciones fluidas
- **SEO optimizado** con metadata, sitemap y robots.txt
- **Diseño responsive** adaptado a todos los dispositivos
- **Imágenes optimizadas** con Next.js Image
- **Performance optimizada** para carga rápida

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build

# Exportar sitio estático
npm run export
```

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Exportación:** Estática (SSG)

## 📁 Estructura del Proyecto

```
chapin/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página de inicio
│   ├── globals.css      # Estilos globales
│   ├── sitemap.ts       # Sitemap para SEO
│   └── robots.ts        # Robots.txt
├── components/
│   ├── Header.tsx       # Navegación
│   ├── Hero.tsx         # Sección hero
│   ├── Descargas.tsx    # Sección de descargas
│   ├── PorQueElegir.tsx # Características
│   ├── PreciosRegionales.tsx # Precios por región
│   ├── Precios.tsx      # Planes de suscripción
│   ├── Galeria.tsx      # Galería de contenido
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── Footer.tsx       # Footer
│   └── WhatsAppButton.tsx # Botón flotante WhatsApp
├── public/
│   └── images/          # Imágenes (agregar manualmente)
└── [archivos de configuración]
```

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
- Primary: Rojo (#ef4444 y variantes)
- Dark: Tonos oscuros para el fondo

### Imágenes
Agrega tus imágenes en la carpeta `public/images/`:
- `hero-bg.jpg` - Fondo del hero
- `download-bg.jpg` - Fondo de descargas
- `features-bg.jpg` - Fondo de características
- `regions-bg.jpg` - Fondo de precios regionales
- `pricing-bg.jpg` - Fondo de precios
- `gallery-bg.jpg` - Fondo de galería
- `faq-bg.jpg` - Fondo de FAQ
- `footer-bg.jpg` - Fondo del footer

### WhatsApp
Modifica el número de WhatsApp en `components/WhatsAppButton.tsx`:
```typescript
const whatsappNumber = 'TU_NUMERO_AQUI'
```

## 🌐 Despliegue

El sitio está optimizado para exportación estática y puede desplegarse en:
- Vercel
- Netlify
- GitHub Pages
- Cualquier hosting de archivos estáticos

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `out/`.

## 📱 Secciones Principales

1. **Hero** - Presentación principal con call-to-action
2. **Descargas** - Enlaces para descargar APKs, iOS y códigos
3. **¿Por qué elegir Chapin?** - Características del servicio
4. **Precios Regionales** - Planes por región
5. **Planes y Precios** - Opciones de suscripción
6. **Galería** - Contenido destacado (placeholders)
7. **FAQ** - Preguntas frecuentes organizadas por categoría
8. **Footer** - Información de contacto y enlaces

## 🔧 Próximos Pasos

1. Agregar imágenes reales en `public/images/`
2. Configurar número de WhatsApp real
3. Agregar enlaces de descarga reales
4. Personalizar contenido según necesidades
5. Agregar sistema de pagos (opcional)
6. Integrar analytics (opcional)

## 📄 Licencia

Proyecto privado para uso interno.

---

Desarrollado con ❤️ para LikeChapin


## Continuar en otra PC

```sh
git clone https://github.com/JuanDiegoVivesCriollo/chapin-streaming.git
cd chapin-streaming
```

Instala las herramientas y dependencias indicadas arriba. Los archivos `.env`, claves, bases de datos reales, respaldos y datos operativos no se publican: trasládalos por un medio privado. Las carpetas de dependencias y compilación se regeneran en el equipo nuevo. No uses una base de producción para pruebas.

Guarda cambios con `git add .`, `git commit` y `git push`; en el otro equipo usa `git pull --ff-only`. El repositorio guarda código, no sincroniza automáticamente MySQL, SQLite ni archivos locales sin subir.
