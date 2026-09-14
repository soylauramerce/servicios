# Merce — Sitio web de maquilladora profesional

Sitio web de marca personal para **Merce**, maquilladora profesional con estudio propio en Armenia, Quindío. Construido con **React + Vite + Tailwind CSS**.

---

## 1. Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (viene con Node.js)

Verifica tu versión:

```bash
node -v
npm -v
```

---

## 2. Instalación

Desde la carpeta del proyecto:

```bash
npm install
```

## 3. Ejecutar en local (modo desarrollo)

```bash
npm run dev
```

Esto abre el sitio en `http://localhost:5173`. Los cambios en el código se reflejan automáticamente.

## 4. Generar la build de producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para publicar. Para previsualizarla localmente:

```bash
npm run preview
```

---

## 5. Estructura del proyecto

```
src/
  components/     Piezas reutilizables (Navbar, Footer, botones, tarjetas, lightbox...)
  sections/       Cada bloque grande de la página de inicio (Hero, Servicios, Portafolio...)
  data/           *** Aquí se edita el contenido real del sitio ***
  hooks/          Lógica reutilizable (animaciones al hacer scroll)
  index.css       Estilos base, paleta de colores y tipografías

public/
  images/         Imágenes del sitio, organizadas por sección
    hero/
    services/
    studio/
    portfolio/
    brides/
    about/
    selfmakeup/
  favicon.svg
  robots.txt
```

---

## 6. Cómo editar el contenido (sin tocar componentes)

Toda la información "de negocio" vive en `src/data/`. No es necesario tocar ningún componente para actualizar textos o precios.

### `src/data/siteConfig.js`
- **WhatsApp:** cambia `whatsappNumber` por el número real, con código de país y sin espacios ni símbolos. Ejemplo: `"573001234567"`.
- **Instagram:** cambia `instagramHandle` (sin `@`).
- **Dirección del estudio:** cambia `studioAddress`.
- **Google Maps:** cuando exista el embed real, completa `googleMapsEmbedUrl` y `googleMapsLink`, y actualiza `src/sections/Location.jsx` para usar un `<iframe src={siteConfig.googleMapsEmbedUrl} />` en lugar del placeholder.
- **Mensajes de WhatsApp:** edita los textos dentro de `whatsappMessages` para cada tipo de servicio.

### `src/data/services.js`
- Cada servicio (Social, Quinceañeras, Novias, Grados, Ocasiones, Taller de Automaquillaje) tiene su propio objeto con `name`, `description`, `price`, `image`, etc.
- Para **cambiar un precio**, edita el campo `price` (o `priceNote`) de ese servicio.
- Para **agregar un nuevo servicio**, copia un objeto existente dentro del arreglo `services` y ajusta sus campos.

### `src/data/content.js`
- Textos narrativos de cada sección: storytelling, experiencia en el estudio, novias, automaquillaje, sobre Merce, proceso de reserva, ubicación y CTA final.
- Los campos marcados con `// TODO` son datos reales pendientes de confirmar (historia personal, dirección exacta, etc.). Complétalos cuando Merce los tenga listos — el sitio nunca inventa cifras, años de experiencia ni certificaciones.

### `src/data/portfolio.js`
- Cada fotografía del portafolio es un objeto con `image`, `alt`, `category` y `size`.
- `category` debe ser una de: `social`, `novias`, `quinceaneras`, `grados`, `ocasiones`.
- `size` controla la proporción en la galería: `tall`, `wide` o `square`.
- Para **agregar una foto nueva**, copia un objeto existente y cambia sus valores.
- Para **quitar una foto**, elimina su objeto del arreglo.

---

## 7. Cómo reemplazar las imágenes placeholder

Todas las imágenes actuales son **placeholders ilustrativos** (SVG con degradados en los colores de marca), generados para que el diseño se pueda visualizar mientras no existan fotografías reales. Cada uno indica claramente su propósito ("reemplazar por foto real").

Para poner las fotos reales de Merce:

1. Coloca la fotografía dentro de la subcarpeta correspondiente en `public/images/` (por ejemplo `public/images/hero/hero-main.jpg`).
2. Ve al archivo de datos correspondiente (`services.js`, `portfolio.js`, `content.js`) o al componente de sección (`src/sections/*.jsx`) y cambia la ruta del placeholder (`.svg`) por la ruta de tu nueva imagen (`.jpg`, `.webp`, etc.).
3. Actualiza también el texto `alt` para describir la foto real.

Recomendaciones:
- Usa formato `.webp` o `.jpg` optimizado para que el sitio cargue rápido.
- Mantén las proporciones similares a las del placeholder que reemplazas para no romper el diseño (retrato ≈ 4:5, panorámica ≈ 4:3, cuadrada ≈ 1:1).

---

## 8. Animaciones e interacciones

- Las animaciones de aparición al hacer scroll están implementadas con `IntersectionObserver` (sin librerías externas) en `src/hooks/useReveal.js` y el componente `src/components/Reveal.jsx`.
- El portafolio tiene filtros por categoría (sin recargar la página) y un lightbox con navegación por teclado (flechas y Escape).
- Se respeta `prefers-reduced-motion`: si la persona tiene animaciones reducidas activadas en su sistema, las transiciones se desactivan automáticamente.

---

## 9. Subir el proyecto a GitHub

Si el proyecto todavía no está en un repositorio:

```bash
git init
git add .
git commit -m "Primer commit: sitio web de Merce"
```

Crea un repositorio nuevo en [github.com/new](https://github.com/new) (puede quedar vacío, sin README ni .gitignore). Luego conéctalo y sube el código:

```bash
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

Para futuros cambios:

```bash
git add .
git commit -m "Descripción breve del cambio"
git push
```

---

## 10. Desplegar el sitio

El proyecto está listo para desplegarse en cualquiera de estas plataformas gratuitas:

### Vercel (recomendado)
1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Click en "Add New… → Project" y selecciona el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite. Deja la configuración por defecto (`Build Command: npm run build`, `Output Directory: dist`).
4. Click en "Deploy".

### Netlify
1. Entra a [netlify.com](https://netlify.com) e inicia sesión con tu cuenta de GitHub.
2. "Add new site → Import an existing project" y selecciona el repositorio.
3. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click en "Deploy site".

### GitHub Pages
1. Instala el paquete de despliegue:
   ```bash
   npm install --save-dev gh-pages
   ```
2. En `package.json`, agrega:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
3. En `vite.config.js`, agrega la propiedad `base` con el nombre de tu repositorio:
   ```js
   export default defineConfig({
     base: "/nombre-del-repositorio/",
     plugins: [react(), tailwindcss()],
   });
   ```
4. Ejecuta:
   ```bash
   npm run deploy
   ```
5. En GitHub, ve a Settings → Pages y selecciona la rama `gh-pages` como fuente.

---

## 11. Variables pendientes por completar

Antes de publicar el sitio en producción, revisa y completa estos valores:

| Variable | Archivo | Qué hacer |
|---|---|---|
| `whatsappNumber` | `src/data/siteConfig.js` | Número real de WhatsApp con código de país |
| `instagramHandle` | `src/data/siteConfig.js` | Usuario real de Instagram |
| `studioAddress` | `src/data/siteConfig.js` | Dirección exacta del estudio |
| `googleMapsEmbedUrl` / `googleMapsLink` | `src/data/siteConfig.js` | Enlace de Google Maps cuando esté disponible |
| Fotografías | `public/images/**` | Reemplazar todos los placeholders `.svg` por fotos reales |
| Historia personal / experiencia | `src/data/content.js` (sección `about`) | Completar cuando Merce confirme los datos |

---

## 12. Stack técnico

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Tipografías: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (display) + [Manrope](https://fonts.google.com/specimen/Manrope) (texto)
- Animaciones: `IntersectionObserver` nativo, sin librerías externas
