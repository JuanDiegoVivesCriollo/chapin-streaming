# 🚀 Guía de Instalación y Uso - LikeChapin

## Instalación de Dependencias

Abre una terminal en PowerShell y ejecuta:

```powershell
cd "c:\Users\DIEGO\Downloads\Desktop\chapin"
npm install
```

## Comandos Disponibles

### Desarrollo
Para iniciar el servidor de desarrollo:
```powershell
npm run dev
```
Luego abre http://localhost:3000 en tu navegador.

### Build de Producción
Para crear la versión optimizada:
```powershell
npm run build
```

### Exportación Estática
El proyecto ya está configurado para exportación estática. El comando `npm run build` generará los archivos estáticos en la carpeta `out/`.

## 📝 Tareas Pendientes

### 1. Agregar Imágenes
Crea imágenes o consigue fondos apropiados para:
- `public/images/hero-bg.jpg` - Fondo hero (sugerencia: streaming/TV)
- `public/images/download-bg.jpg` - Fondo descargas (sugerencia: dispositivos móviles)
- `public/images/features-bg.jpg` - Fondo características (sugerencia: tecnología)
- `public/images/regions-bg.jpg` - Fondo regiones (sugerencia: mapa/banderas)
- `public/images/pricing-bg.jpg` - Fondo precios (sugerencia: abstracto oscuro)
- `public/images/gallery-bg.jpg` - Fondo galería (sugerencia: cine/películas)
- `public/images/faq-bg.jpg` - Fondo FAQ (sugerencia: soporte/ayuda)
- `public/images/footer-bg.jpg` - Fondo footer (sugerencia: oscuro sutil)

### 2. Configurar WhatsApp
Edita el archivo `components/WhatsAppButton.tsx` línea 6:
```typescript
const whatsappNumber = 'TU_NUMERO_AQUI' // Ejemplo: '5491123456789'
```

### 3. Agregar Enlaces de Descarga
Edita el archivo `components/Descargas.tsx` y actualiza los URLs:
```typescript
const apks = [
  { name: 'APK 1', url: 'URL_REAL_APK_1' },
  { name: 'APK 2', url: 'URL_REAL_APK_2' },
  // etc...
]
```

### 4. Personalizar Contacto
Edita `components/Footer.tsx` con tu información real:
- Email: Línea ~114
- Teléfono: Línea ~118
- Redes sociales: Enlaces en líneas ~49-61

## 🎨 Personalización de Colores

Los colores se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ef4444', // Color principal
    600: '#dc2626', // Hover states
    // Modifica según tu branding
  },
}
```

## 📱 Testing en Diferentes Dispositivos

El sitio es responsive. Prueba en:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)
1. Sube el proyecto a GitHub
2. Conecta tu repositorio en vercel.com
3. Vercel detectará Next.js automáticamente
4. Deploy!

### Opción 2: Netlify
1. `npm run build`
2. Sube la carpeta `out/` a Netlify
3. Deploy!

### Opción 3: GitHub Pages
1. `npm run build`
2. Configura GitHub Pages para servir desde la carpeta `out/`

## 🔧 Troubleshooting

### Error de módulos no encontrados
```powershell
rm -r node_modules
rm package-lock.json
npm install
```

### Problemas de caché
```powershell
rm -r .next
npm run dev
```

## 📊 Optimización de Performance

- ✅ Exportación estática configurada
- ✅ Imágenes sin optimizar (para exportación estática)
- ✅ CSS optimizado con Tailwind
- ✅ Code splitting automático
- ✅ Metadata SEO incluida
- ✅ Sitemap y robots.txt configurados

## 🎯 Próximas Mejoras Sugeridas

1. **Analytics**: Agregar Google Analytics o similar
2. **Formulario de contacto**: Implementar envío de emails
3. **Sistema de pagos**: Integrar Stripe/PayPal
4. **Panel de admin**: Para gestión de contenido
5. **Base de datos**: Para usuarios y suscripciones
6. **Autenticación**: Sistema de login
7. **Blog**: Sección de noticias/actualizaciones

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, revisa:
- README.md para documentación general
- Comentarios en el código para detalles específicos
- Next.js docs: https://nextjs.org/docs

---

¡Éxito con tu proyecto LikeChapin! 🎉
