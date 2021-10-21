### Formmaker
Proyecto para la creacion de formularios dinamicos, (inspirado en GoogleForm).

- Front: ReactJS
- Backend PHP: Lectura/Escritura de archivos Json, tanto para los formularios como las respuestas.
- Backend NodeJs: Se encuentra en desarrollo, pero la idea es utilizar una base de datos Mongo para una mejor optimizacion.

#### Inicio del proyecto:

Nombre  | Detalle
------------- | -------------
`npm start`  | Inicia el proyecto en entorno de desarrollo
`npm run build`   | Hace el Build del proyecto para enviarlo a produccion o replica

#### Configuracion de variables de entorno:

El proyecto esta desarrollado para soportar 3 entornos:

- Local: entorno en la computadora local.
- Replica: entorno de prueba que replica el entorno de produccion.
- Produccion: entorno publicado

Cuando se hace levanta el proyecto en entorno `dev` o entorno prouduccion, haciendo `build`. Se inyectan las siguentes variables en los procesos del entorno. El archivo se encuentra en el root del proyecto `.env`

Pequeño detalle de la funcion de cada variable.

Info: https://create-react-app.dev/docs/adding-custom-environment-variables/

<small>
REACT_APP_URL_GET_TOKEN: URL donde se obtiene por metodo GET los datos del usuario, (WebLogin)

REACT_APP_APP_ID: Id de la aplicación, no es importante.

REACT_APP_TOKEN: Código de seguridad para el envio de información, ideal para Backend PHP, el .env del back debe tener el mismo código.

REACT_APP_ENV: Configuración del entorno: local - replica - produccion

Las siguentes 3 varibles son para definir cual va ser la URL del proyecto en los 3 entornos, sirve para generar URL o validar query params:
REACT_APP_URL_LOCAL=http://localhost:3000/apps/formmaker
REACT_APP_URL_REPLICA=
REACT_APP_URL_PRODUCCION=

Las siguentes 3 varibles son para definir cual va ser la URL del backend en los 3 entornos:
REACT_APP_URL_BK_LOCAL=
REACT_APP_URL_BK_REPLICA=
REACT_APP_URL_BK_PRODUCCION=

Las siguentes 2 varibles son para definir cual va ser la URL donde se hace la consulta de verificar el DNI de las respuestas:
REACT_APP_URL_COMPROBAR_DNI_REPLICA =
REACT_APP_URL_COMPROBAR_DNI_PRODUCCION =

Las siguentes 3 varibles son para definir cual va ser la URL del backend para obtener los resultados en .csv
REACT_APP_URL_RESULTADOS_LOCAL=
REACT_APP_URL_RESULTADOS_REPLICA=
REACT_APP_URL_RESULTADOS_PRODUCCION=

Las siguentes 3 varibles son para definir cual va ser la URL del backend en mongo.
REACT_APP_API_BK_PROD=
REACT_APP_API_BK_DEV=
REACT_APP_API_BK_REPLICA=
</small>
