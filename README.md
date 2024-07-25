Opciones de inicio de sesión con Google e Instagram. También te explicaré qué necesitas para configurar esto con MongoDB y Azure.
Primero, vamos a estructurar el proyecto:
structura del Proyecto
pilates-platform/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Auth.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   └── auth.js
│   │   └── server.js
│   ├── package.json
│   └── .env
└── README.md
Ahora, vamos a crear los archivos principales:

1- Creamos la carpeta backend
2- Creamos la carpeta frontend 
3- Creamos dentro de la carpeta frontend la carpeta components y dentro de components creamos el archivo Auth.js 
4-Creamos dentro de la carpeta backend el archivo server.js
5-Creamos dentro de la carpeta backend el archivo passport.js
6-Creamos dentro de la carpeta backend el archivo models/User.js
7-Creamos dentro de la carpeta backend el archivo routes/auth.js
8-Creamos dentro de la carpeta backend el archivo config/passport.js
9-Creamos dentro de la carpeta frontend el archivo App.js
10-Creamos dentro de la carpeta frontend el archivo index.js
11-Creamos dentro de la carpeta frontend el archivo index.html
12-Creamos dentro de la carpeta frontend el archivo package.json
13-Creamos dentro de la carpeta backend el archivo package.json
