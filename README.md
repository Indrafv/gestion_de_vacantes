💼 Proyecto Backend con Node.js + Express

📌 Descripción

Sistema de gestión de vacantes para una plataforma de empleo. Los usuarios pueden registrarse, autenticarse y publicar vacantes.




🧠 Tecnologías sugeridas

Node.js

Express

MongoDB (con Mongoose) o MySQL (con Sequelize)

JWT

bcrypt

dotenv

Postman




📁 Estructura recomendada

/src
  /controllers
  /routes
  /models
  /middleware
  /config
  app.js
.env




🧩 Retos progresivos

🟢 Nivel 1: Base sólida

Inicializa proyecto con npm init y configura app.js

Instala y configura Express, dotenv, cors

Crea estructura de carpetas

Define rutas de prueba: GET /, GET /api/hello



🟡 Nivel 2: Usuarios (auth)

Modelo de usuario

Registro con validación y contraseña hasheada (bcrypt)

Login con JWT

Ruta protegida con middleware JWT: GET /api/perfil



🔵 Nivel 3: Vacantes

Modelo de vacante

CRUD de vacantes:

GET /api/jobs

POST /api/jobs (protegido)

Validaciones con express-validator



🟣 Nivel 4: Mejoras

Paginación y filtros

Relación usuario ↔ vacante (quién la creó)

PUT /api/jobs/:id y DELETE /api/jobs/:id (autenticado y autorizado)

Middleware de errores



✅ Bonus

Subida de archivos (CV)

Logging con Morgan

Documentación Swagger

.env bien usado



🔁 Git Flow (trabajo en equipo)

Rama principal

main: rama estable, contiene solo código probado

Ramas de desarrollo

feature/auth

feature/jobs

fix/login-bug

Flujo de trabajo

Crear nueva rama: git checkout -b feature/lo-que-vayas-a-hacer

Desarrollar

git add . && git commit -m "mensaje" && git push origin feature/...

Crear Pull Request a main

Revisar y hacer merge entre los dos




🌐 Proyecto Frontend con React

📌 Descripción

Frontend de una plataforma de empleo donde los usuarios pueden registrarse, iniciar sesión, ver vacantes, crear nuevas vacantes (si están autenticados), y postularse.



🧠 Tecnologías sugeridas

React (Vite o Create React App)

React Router DOM

Axios

Context API o Redux (opcional)

Tailwind CSS (opcional para estilos rápidos)

Formik + Yup (para formularios y validaciones)



📁 Estructura recomendada

/src
  /components
  /pages
  /services
  /context
  /hooks
  /utils
  App.jsx
  main.jsx

  

🧩 Retos progresivos

🟢 Nivel 1: Setup y navegación

Inicializa proyecto con Vite o CRA

Instala React Router DOM y configura rutas básicas:

/ Inicio

/login

/register

/jobs

/jobs/:id

/create-job



🟡 Nivel 2: Usuarios (auth)

Crea formularios de Login y Registro

Conecta esos formularios con el backend usando Axios

Almacena el token en localStorage

Protege rutas con lógica de autenticación (ej. /create-job solo si estás logueado)

Muestra errores si falla el login o registro



🔵 Nivel 3: Vacantes

Lista todas las vacantes con GET /api/jobs

Muestra detalle de una vacante (GET /api/jobs/:id)

Crea formulario para nueva vacante (POST, autenticado)

Permite editar/eliminar vacantes propias



🟣 Nivel 4: Mejoras

Usa Context para manejar el usuario globalmente

Usa Formik + Yup para validaciones limpias

Agrega mensajes de éxito/error (ej. Toasts)

Paginación o búsqueda de vacantes



✅ Reglas del equipo

Usar ramas para todo (no trabajar directo en main)

Pull Request antes de mergear

Revisar código juntos

Dejar commits claros
