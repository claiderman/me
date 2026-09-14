# Portafolio personal y CV multilenguaje

Este proyecto es un portafolio personal desarrollado con Astro y publicado bajo la base path /me. La web se presenta en dos idiomas:

- Español: /me/es/
- English: /me/en/

La redirección inicial detecta el idioma guardado en el navegador o el idioma del navegador y luego lleva al usuario a la versión correcta. También se incluyen los CV descargables por idioma en las rutas de archivos estáticos.

## URLs principales

- Inicio: /me/
- Español: /me/es/
- English: /me/en/
- CV español: /me/locales/es/cv.pdf
- CV English: /me/locales/en/cv.pdf

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run start
```

Esto inicia el proyecto en modo desarrollo con Astro.

## Build de producción

```bash
npm run build
```

El comando ejecuta la validación de TypeScript y genera la versión de producción.

## Vista previa local

```bash
npm run preview
```

## Estructura clave

```text
.
├── public/
│   └── locales/
│       ├── es/
│       │   ├── common.json
│       │   ├── cv.json
│       │   ├── cv.pdf
│       │   └── sections.json
│       └── en/
│           ├── common.json
│           ├── cv.json
│           ├── cv.pdf
│           └── sections.json
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   └── [locale]/index.astro
│   ├── i18n/
│   ├── components/
│   ├── layouts/
│   ├── utils/
│   └── data/
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

## Lógica de idioma y CV

### Redirección por idioma

La página inicial revisa estos valores en orden:

1. localStorage.locale
2. idioma del navegador
3. fallback: es

Luego redirige a la ruta correcta:

- /me/es/
- /me/en/

### CV según idioma

La descarga del CV usa el idioma actual de la navegación para apuntar a:

- Español: /me/locales/es/cv.pdf
- English: /me/locales/en/cv.pdf

Eso garantiza que el usuario descargue la hoja de vida correspondiente al idioma seleccionado.

## Despliegue

Este proyecto está preparado para desplegarse en GitHub Pages con la base configurada en /me.

Configuración relevante en Astro:

```js
site: "https://claiderman.github.io",
base: "/me"
```

## Contacto

- LinkedIn: https://www.linkedin.com/in/claiderman-lozano
- GitHub: https://github.com/claiderman
- Email: claiderman.lozano@gmail.com

## Nota sobre contenido actualizado

Los datos del portafolio y los archivos PDF de CV se mantienen actualizados en los archivos locales del proyecto y deben reflejarse en:

- public/locales/es/cv.pdf
- public/locales/en/cv.pdf
- src/data/cv.json
- src/data/cv.en.json

La ruta de la página y la descarga del CV están alineadas con el idioma actual para asegurar una experiencia correcta en ES y EN.

---

Hecho para un portafolio personal multilenguaje con experiencia en desarrollo, backend y soluciones cloud.
