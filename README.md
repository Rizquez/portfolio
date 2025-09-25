# 🌐 Portfolio Personal

Este proyecto es mi portfolio web personal, desarrollado con Vue.js, para mostrar mi trayectoria profesional, estudios, certificaciones y proyectos destacados.

## 🧾 Descripcion

El portfolio esta diseñado para ser minimalista, rapido y responsive, priorizando la accesibilidad y la experiencia de usuario.

Incluye secciones clave como:

- **Home:** Presentacion principal.
- **Acerca de mi:** Informacion personal, carrera, estudios y certificaciones.
- **Portfolio:** Proyectos personales y profesionales.
- **Contacto:** Formulario y enlaces a redes profesionales.
- **Politica de privacidad:** Pagina informativa para mayor transparencia.

## 🚀 Tecnologias utilizadas

- **Framework:** Vue.js
- **Lenguajes:** JavaScript, HTML5, CSS3
- **Despliegue:** Netlify

## 📂 Estructura del proyecto

Los archivos principales se encuentran organizados en:

```
porfolio/
├── .vscode/...
├── dist/...
├── public
│   ├── _redirects
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── images/...
│   │   └── main.css
│   ├── components
│   │   ├── AlertModal.vue              # Modal de alertas
│   │   ├── BackToTop.vue               # Boton de volver al inicio
│   │   ├── Footer.vue                  # Pie de pagina con enlaces
│   │   ├── Head.vue                    # Encabezado y navegacion principal
│   │   └── Project.vue                 # Componente para mostrar proyectos individuales
│   ├── router
│   │   └── index.js
│   ├── stores
│   │   └── counter.js
│   ├── views
│   │   ├── AboutMeView.vue             # Acerca de mi
│   │   ├── ContactView.vue             # Contacto
│   │   ├── HomeView.vue                # Inicio
│   │   ├── PortfolioView.vue           # Listado de proyectos personales
│   │   └── PrivacyPolicyView.vue       # Politica de privacidad
│   ├── App.vue
│   └── main.js
├── .editorconfig
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 📦 Instalacion y uso (Windows)

1. Clonar el repositorio (ssh):
```sh
git clone git@github.com:Rizquez/portfolio.git
cd portfolio
```

2. Instalar dependencias:
```sh
npm install
```

3. Ejecutar en entorno de desarrollo:
```sh
npm run dev
```

4. Generar build para produccion:
```sh
npm run build
```

## 🔒 Licencia

Este proyecto esta bajo la licencia `MIT`, lo que permite su uso, distribucion y modificacion con las condiciones especificadas en el archivo `LICENSE`.

## ⚙ Contacto, soporte y desarrollo
- Pedro Rizquez: pedro.rizquez.94@hotmail.com / +34 633 504 225