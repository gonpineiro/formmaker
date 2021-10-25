### Formmaker
Proyecto para la creación de formularios dinámicos, (inspirado en GoogleForm).

Desarrolladores:

Nombre                               | Contacto
-------------                        | -------------
Gonzalo Piñeiro Aleman Urquiza       | [gon.pineiro@gmail.com](mailto:gon.pineiro@gmail.com)
Norberto Stange                      | [norbertostange@gmail.com](mailto:norbertostange@gmail.com)

- <b>Frontend</b>: ReactJS
- <b>Backend PHP</b>: Lectura/Escritura de archivos JSON, para los formularios y respuestas.
- <b>Backend NodeJS</b>: Se encuentra en desarrollo, pero la idea es utilizar una base de datos Mongo para una mejor optimización.

<small> El proyecto no admite ambos backend en simultaneo, el backend funcional es el de PHP, el de NodeJS no se encuentra operativo. </small>

#### Inicio del proyecto:

Nombre              | Detalle
-------------       | -------------
`npm start`         | Inicia el proyecto en entorno de desarrollo.
`npm run build`     | Hace el Build del proyecto para enviarlo a producción o replica.
#### Ingreso al sitio
- Para el ingreso al listado de los formulario hay que ingresar la URL raíz, detecta que no es admin y muestra el listado de los formularios activos. `http://localhost:3000/apps/formulario`
- Para el ingreso a panel admin se debe ingrear a la URL con el parametro `SESSIONKEY` enviado por `GET`: `http://localhost:3000/apps/formulario?SESSIONKEY=<tokenWebLogin>`
- Para ingresar a un formulario particular se debe ingrear a la URL con el parametro `idForm` enviado por `GET`: `localhost:3000/apps/formulario?idForm=1`    

#### Consideraciones al generar un Formulario

- Cuando se genera un formulario la aplicación va retornar una URL con el parametro `idForm` generado, dicho ID es el nombre del formulario.
- Los formularios se generan en un estado `borrador` para poder ingresar/visualizar el formulario se debe cambiar manualmente el estado a `activo`
- Si Backend del proyecto es el de PHP, los formularios se generan dentro de una carpeta del proyecto.
- Si Backend del proyecto es el de NodeJS, los formularios se generan en una base de datos Mongo.

#### Configuración de variables de entorno:

El proyecto esta desarrollado para soportar tres entornos:

- <b>Local</b>: entorno en la computadora local.
- <b>Replica</b>: entorno de prueba que replíca el entorno de producción.
- <b>Producción</b>: entorno publicado.

<small>Cuando se levanta el proyecto en entorno `dev` o entorno producción (haciendo `build`). Se inyectan las siguentes variables en los procesos del entorno. El archivo se encuentra en el root del proyecto `.env`</small>

<b>Info</b>: https://create-react-app.dev/docs/adding-custom-environment-variables/

Nombre                                      | Detalle
-------------                               | -------------
REACT_APP_URL_GET_TOKEN                     | URL donde se obtiene por metodo GET los datos del usuario, (WebLogin)
REACT_APP_APP_ID                            | Id de la aplicación, (opcional).
REACT_APP_TOKEN                             | Código de seguridad para el envio de información, ideal para Backend PHP, el .env del back debe tener el mismo código.
REACT_APP_ENV                               | Configuración del entorno: local - replica - produccion
REACT_APP_URL_LOCAL                         | URL el proyecto en el entorno Local.
REACT_APP_URL_REPLICA                       | URL el proyecto en el entorno Replica.
REACT_APP_URL_PRODUCCION                    | URL el proyecto en el entorno Producción.
REACT_APP_URL_BK_LOCAL                      | URL del Backend en el entorno Local
REACT_APP_URL_BK_REPLICA                    | URL del Backend en el entorno Replica
REACT_APP_URL_BK_PRODUCCION                 | URL del Backend en el entorno Producción
REACT_APP_URL_COMPROBAR_DNI_REPLICA         | URL para realizar la consulta por DNI en Replica
REACT_APP_URL_COMPROBAR_DNI_PRODUCCION      | URL para realizar la consulta por DNI en Producción
REACT_APP_URL_RESULTADOS_LOCAL              | URL del Backend para obtener los resultados por .csv en entorno Local
REACT_APP_URL_RESULTADOS_REPLICA            | URL del Backend para obtener los resultados por .csv en entorno Replica
REACT_APP_URL_RESULTADOS_PRODUCCION         | URL del Backend para obtener los resultados por .csv en entorno Producción
REACT_APP_API_BK_PROD                       | URL Backend Mongo entorno Local
REACT_APP_API_BK_DEV                        | URL Backend Mongo entorno Replica
REACT_APP_API_BK_REPLICA                    | URL Backend Mongo entorno Producción

#### Información Adicional

- Cuando se crea un formulario el proyecto inyecta el campo `acepto` dentro del formulario, genera el `checkbox` de "Aceptar Términos y condiciones".
- Cuando se crea un formulario el proyecto inyecta el campo `fechaHoraRespuesta` dentro del formulario, es para guardar la fecha y hora de la respuesta, se recomienda ingrear esta lógica en el backend.
- Antes de crear el formulario, se encuentra configurado por defecto tres campos: `Mail`, `Teléfono`, `DNI`, el campo Mail es <b>importante</b> porque es donde se va enviar el email cuando un usuario realiza una respuesta.

#### Tipos de campos que genera el proyecto

Nombre                                      | Detalle
-------------                               | -------------
`AnswerDate`                                | Campo oculto para guardar fecha y hora de la respuesta
`Checkbox`                                  | Único input de tipo checkbox, se usa para el campo `acepto`
`Checkboxs`                                 | Selección Múltiple de checkbox
`Date`                                      | Dato de tipo Fecha
`Image`                                     | Para mostrar el Banner del formulario
`Input`                                     | Texto, Parrafo, Email, Número
`Link`                                      | Genera un Link para el usuario
`Radio`                                     | Unica Selección
`Select`                                    | Selección Múltiple de select
`Separator`                                 | Separador del formulario, genera un detalle
`TextArea`                                  | Input de tipo párrafo

#### Pendientes del proyecto

- Terminar el modulo de Gestionar Formularios
- Poder editar los formularios creados.
- Generar un sistema de permisos para las respuestas
