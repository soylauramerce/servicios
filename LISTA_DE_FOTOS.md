# Lista de fotos necesarias — Sitio web de Merce

Esta es la lista completa de fotografías reales que reemplazan a los placeholders del sitio. En total son **30 fotos**. No necesitas todas el primer día: puedes empezar por las marcadas como **prioridad alta** y completar el resto después.

## Tamaño recomendado (importante para que la web cargue rápido)

No subas las fotos directo de la cámara o el celular a resolución completa (eso puede pesar 5–10 MB cada una). Antes de subirlas:

1. **Redimensiona** cada foto según su tipo (ver tabla abajo) — con cualquier editor, o herramientas gratis como [squoosh.app](https://squoosh.app).
2. **Exporta en `.webp` o `.jpg`** con calidad ~80%.
3. Cada foto final debería pesar entre **80 KB y 300 KB** (nunca más de 500 KB).

| Tipo de foto | Proporción | Tamaño recomendado |
|---|---|---|
| Vertical / retrato | 4:5 | 800 × 1000 px |
| Horizontal / panorámica | 4:3 | 1000 × 750 px |
| Cuadrada | 1:1 | 800 × 800 px |

## Cómo reemplazar cada placeholder

1. Guarda la foto en la carpeta indicada dentro de `public/images/` con el nombre que prefieras (ej. `hero-main.jpg`).
2. Abre el archivo de datos indicado y cambia la ruta `.svg` por la ruta de tu foto nueva.
3. Actualiza el texto `alt` para describir la foto real (ayuda al SEO y a la accesibilidad).

---

## 1. Hero — Portada (2 fotos) · Prioridad alta

Definen la primera impresión del sitio. Se editan en `src/sections/Hero.jsx`.

| Archivo | Proporción | Qué debe mostrar |
|---|---|---|
| `hero/hero-main.jpg` | Vertical 4:5 | La foto más fuerte del portafolio: un maquillaje terminado, de frente, con buena luz. Puede ser un rostro maquillado por Merce o Merce misma trabajando. |
| `hero/hero-secondary.jpg` | Cuadrada 1:1 | Detalle cercano (ojos, labios o textura de piel) que acompañe a la foto principal. |

## 2. Servicios (6 fotos) · Prioridad alta

Una foto representativa por cada servicio. Se editan en `src/data/services.js`.

| Archivo | Proporción | Qué debe mostrar |
|---|---|---|
| `services/social.jpg` | Vertical 4:5 | Look de maquillaje social (fiesta, cena, cumpleaños). |
| `services/quinceanera.jpg` | Vertical 4:5 | Look de maquillaje de quinceañera. |
| `services/novias.jpg` | Vertical 4:5 | Look de maquillaje de novia, natural y luminoso. |
| `services/grados.jpg` | Vertical 4:5 | Look de maquillaje de grado. |
| `services/ocasiones.jpg` | Vertical 4:5 | Look de una ocasión especial cualquiera. |
| `services/selfmakeup.jpg` | Vertical 4:5 | Merce asesorando a una clienta, o una clienta maquillándose frente al espejo (para el taller). |

## 3. El estudio (3 fotos) · Prioridad media

Se editan en `src/sections/StudioExperience.jsx`.

| Archivo | Proporción | Qué debe mostrar |
|---|---|---|
| `studio/studio-01.jpg` | Horizontal 4:3 | Vista general del estudio: silla, espejo, luces. |
| `studio/studio-02.jpg` | Vertical 4:5 | Detalle del estudio (mesa de productos, decoración). |
| `studio/studio-03.jpg` | Vertical 4:5 | Otro rincón o detalle del estudio. |

## 4. Portafolio (14 fotos) · Se puede ampliar con el tiempo

Se editan en `src/data/portfolio.js`. Puedes empezar con menos fotos por categoría y agregar más después (solo copia el patrón en el archivo).

| Archivo | Categoría | Proporción | Qué debe mostrar |
|---|---|---|---|
| `portfolio/social-01.jpg` | Social | Vertical 4:5 | Look social |
| `portfolio/social-02.jpg` | Social | Horizontal 4:3 | Look social |
| `portfolio/social-03.jpg` | Social | Vertical 4:5 | Look social |
| `portfolio/social-04.jpg` | Social | Cuadrada 1:1 | Detalle de look social |
| `portfolio/novias-01.jpg` | Novias | Vertical 4:5 | Look de novia |
| `portfolio/novias-02.jpg` | Novias | Cuadrada 1:1 | Detalle de piel/novia |
| `portfolio/novias-03.jpg` | Novias | Horizontal 4:3 | Preparación de novia |
| `portfolio/quince-01.jpg` | Quinceañeras | Vertical 4:5 | Look de quinceañera |
| `portfolio/quince-02.jpg` | Quinceañeras | Cuadrada 1:1 | Detalle de quinceañera |
| `portfolio/grado-01.jpg` | Grados | Vertical 4:5 | Look de grado |
| `portfolio/grado-02.jpg` | Grados | Horizontal 4:3 | Sesión de fotos de grado |
| `portfolio/ocasion-01.jpg` | Ocasiones especiales | Vertical 4:5 | Ocasión especial |
| `portfolio/ocasion-02.jpg` | Ocasiones especiales | Horizontal 4:3 | Cena o celebración |
| `portfolio/ocasion-03.jpg` | Ocasiones especiales | Cuadrada 1:1 | Celebración |

## 5. Novias — Sección especial (2 fotos) · Prioridad media

Se editan en `src/sections/Brides.jsx`. Pueden repetirse fotos que ya usaste en el portafolio de novias si no tienes más disponibles.

| Archivo | Proporción | Qué debe mostrar |
|---|---|---|
| `brides/brides-01.jpg` | Vertical 4:5 | Foto editorial de novia (la más elegante que tengas). |
| `brides/brides-02.jpg` | Horizontal 4:3 | Detalle o momento de la preparación de la novia. |

## 6. Sobre Merce (1 foto) · Prioridad alta

Se edita en `src/sections/About.jsx`.

| Archivo | Proporción | Qué debe mostrar |
|---|---|---|
| `about/about-merce.jpg` | Vertical 4:5 | Retrato profesional de Merce (idealmente sonriendo, en el estudio o con buena luz natural). |

## 7. Taller de Automaquillaje (2 fotos) · Prioridad media

Se editan en `src/data/services.js` (objeto `selfMakeupWorkshop`).

| Archivo | Proporción | Qué debe mostrar |
|---|---|---|
| `selfmakeup/selfmakeup-01.jpg` | Vertical 4:5 | Merce enseñando/asesorando a una clienta en el taller 1:1. |
| `selfmakeup/selfmakeup-02.jpg` | Horizontal 4:3 | Detalle del taller: productos, brochas, o la clienta practicando. |

---

## Resumen rápido

- **Total de fotos:** 30
- **Prioridad alta (9 fotos):** hero (2), servicios (6), sobre Merce (1) — con esto el sitio ya luce completo.
- **Prioridad media (7 fotos):** estudio (3), novias (2), automaquillaje (2).
- **Ampliable (14 fotos):** portafolio — puedes lanzar con menos y sumar más looks con el tiempo.
