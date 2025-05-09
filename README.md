# Proyecto AdopMe - Backend (Coderhouse)

Backend para la aplicación AdopMe, desarrollada como proyecto final para el curso de Backend de Coderhouse.

## Características Principales

*   Gestión de Usuarios (Registro, Login)
*   Gestión de Mascotas (CRUD)
*   Sistema de Adopciones
*   Documentación de API con Swagger
*   Tests funcionales
*   Dockerizado

## Tecnologías Utilizadas

*   Node.js
*   Express.js
*   MongoDB (con Mongoose)
*   JWT (para sesiones)
*   Swagger (para documentación)
*   Mocha & Chai (para testing)
*   Supertest (para testing de API)
*   Docker

## Instalación y Ejecución Local

1.  Clona el repositorio.
2.  Instala las dependencias: `npm install`
3.  Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias (ej: `PORT`, `MONGODB_URI`, `JWT_SECRET`). Puedes usar `.env.example` como plantilla si existe.
4.  Inicia el servidor en modo desarrollo: `npm run dev`
5.  Inicia el servidor en modo producción: `npm start`
6.  Ejecuta los tests: `npm test`
7.  Accede a la documentación de la API en: `http://localhost:8080/api-docs` .

## Ejecución con Docker

1.  **Construir la imagen:**
    ```bash
    docker build -t tu-usuario-dockerhub/adoptme-backend:latest .
    ```
2.  **Ejecutar el contenedor:**
    ```bash
    # Reemplaza <tu_mongodb_uri> con tu cadena de conexión real
    docker run -d -p 3000:3000 --name adoptme-container -e PORT=3000 -e MONGODB_URI="<tu_mongodb_uri>" -e JWT_SECRET="<tu_jwt_secret>" tu-usuario-dockerhub/adoptme-backend:latest
    ```
    *   `-d`: Ejecuta en modo detached (segundo plano).
    *   `-p 3000:3000`: Mapea el puerto 3000 del host al puerto 3000 del contenedor (ajusta si tu app usa otro puerto).
    *   `--name adoptme-container`: Asigna un nombre al contenedor.
    *   `-e VARIABLE=valor`: Pasa variables de entorno necesarias al contenedor. **¡Asegúrate de pasar todas las variables requeridas de tu `.env`!**

## Imagen Docker en Docker Hub

Puedes encontrar la imagen Docker de este proyecto en Docker Hub:

https://hub.docker.com/r/genabottarlini/adoptme-backend

*(Reemplaza `genabottarlini` con tu nombre de usuario real en el enlace y en los comandos)*
