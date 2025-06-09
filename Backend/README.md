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




🧩 Nivel 1: Configuración base del backend
 Inicializá un proyecto con npm init -y

 Instalá dependencias: express, dotenv, cors, nodemon, etc.

 Creá el archivo server.js que levanta el servidor

 Creá app.js donde cargás middlewares y rutas

 Configurá nodemon para desarrollo

 Armá estructura básica:

    bash
    Copiar
    Editar
    /backend
    ├── server.js
    ├── app.js
    ├── .env
    ├── /routes
    ├── /db
    
    
🧩 Nivel 2: Rutas y conexión a la base de datos
 Conectá a MongoDB o una base de datos local en /db/index.js

 Creá ruta de prueba (/api/ping → "pong")

 Creá archivo /routes/auth.js para login y registro

 Creá archivo /routes/users.js para gestionar usuarios
 
 

🧩 Nivel 3: Lógica de usuarios
 Registro de usuarios con validaciones

 Inicio de sesión (login) con email y contraseña

 Usar bcrypt para encriptar contraseñas

 Generar y devolver JWT al iniciar sesión

 Crear carpeta /utils y archivo jwt.js
 
 

🧩 Nivel 4: Seguridad y autenticación
 Crear middleware auth.js para proteger rutas con JWT

 Proteger rutas de usuarios (como GET /api/users)

 Crear carpeta /middlewares
 
 

🧩 Nivel 5: CRUD de vacantes
 Crear archivo /routes/jobs.js

 CRUD: Crear, leer, actualizar y eliminar vacantes

 Asociar vacante al usuario logueado

 Agregar validaciones básicas
 
 

🧩 Nivel 6: Mejora y organización
 Separar lógica de rutas si crece mucho

 Usar middlewares de error

 Validar entradas con express-validator

 Cargar datos desde .env correctamente



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



🧩 Nivel 1: Configuración base del frontend
 Crear proyecto con npm create vite@latest (React + JS)

 Instalar react-router-dom, axios, dotenv

 Crear estructura inicial:

    
    /frontend
    ├── /src
    │   ├── main.jsx
    │   ├── App.jsx
    │   ├── /pages
    │   ├── /components
    │   └── /services
    └── .env
    
    
🧩 Nivel 2: Navegación y rutas
 Configurar react-router-dom

 Crear rutas: Home, Login, Registro, Publicar Vacante

 Componentes base para cada página
 
 

🧩 Nivel 3: Registro e inicio de sesión
 Crear formulario de registro y login

 Conectar a backend con axios

 Almacenar token en localStorage

 Crear AuthContext para manejar sesión del usuario
 
 

🧩 Nivel 4: Vacantes
 Listar vacantes disponibles (fetch desde backend)

 Crear página para publicar vacante (si el usuario está logueado)

 Editar y eliminar tus propias vacantes
 
 

🧩 Nivel 5: Protección y roles
 Proteger rutas para que solo usuarios logueados publiquen

 Mostrar opciones según rol (admin, user)

 Agregar control de errores (respuestas del backend)