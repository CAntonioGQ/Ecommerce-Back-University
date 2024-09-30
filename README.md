# Gestión de Préstamos

Este proyecto implementa un sistema de gestión de préstamos utilizando una aplicación web desarrollada con Node.js, Express, MySQL y TypeScript

## Backend

El backend de la aplicación está construido con Node.js y Express, y se encarga de manejar las solicitudes HTTP y las operaciones CRUD en la base de datos MySQL.

### Configuración del Backend

1. **Instalación de dependencias**: Antes de ejecutar el servidor, asegúrate de instalar todas las dependencias necesarias ejecutando `npm install`.

2. **Configuración de la base de datos**: Asegúrate de tener una base de datos MySQL configurada. Puedes modificar los parámetros de conexión en el archivo `src/config/database.ts` para que coincidan con tu entorno.

3. **Inicio del servidor**: Para iniciar el servidor, ejecuta `npm start` en tu terminal. Por defecto, el servidor se ejecutará en el puerto 3030.

### Endpoints del Backend

- `POST /api/prestamos`: Crea un nuevo préstamo en la base de datos.
- `GET /api/prestamos`: Obtiene todos los préstamos de la base de datos.
- `GET /api/prestamos/:prestamoId`: Obtiene un solo préstamo según su ID.
- `PUT /api/prestamos/:prestamoId`: Actualiza un préstamo existente según su ID.
- `DELETE /api/prestamos/:prestamoId`: Elimina un préstamo existente según su ID.

## Frontend

El frontend de la aplicación está construido con TypeScript y proporciona una interfaz de usuario para interactuar con el backend.

### Configuración del Frontend

1. **Instalación de dependencias**: Antes de ejecutar la aplicación frontend, asegúrate de instalar todas las dependencias necesarias ejecutando `npm install` en la carpeta `frontend`.

2. **Compilación de TypeScript**: Compila los archivos TypeScript ejecutando `npm run build` en la carpeta `frontend`. Esto generará los archivos JavaScript necesarios en la carpeta `frontend/dist`.

3. **Servir archivos estáticos**: Asegúrate de servir los archivos estáticos en la carpeta `frontend/dist` utilizando cualquier servidor HTTP.

### Interacción con el Backend

- **Crear préstamo**: Al enviar el formulario en la interfaz de usuario, se crea un nuevo préstamo en la base de datos.
- **Editar préstamo**: Al hacer clic en el botón "Editar" de un préstamo existente, se muestra un formulario con los detalles del préstamo seleccionado. Al enviar el formulario, se actualiza el préstamo en la base de datos.
- **Eliminar préstamo**: Al hacer clic en el botón "Eliminar" de un préstamo existente, se elimina el préstamo de la base de datos después de confirmar la acción.
