const URL_GET_TOKEN = process.env.REACT_APP_URL_GET_TOKEN;
let URL_BACK;
let URL_API;
let URL_WS_COMPROBAR;
let URL_WS_RESULTADOS;
let URL_APP;
if (process.env.REACT_APP_ENV === "local") {
  URL_BACK = process.env.REACT_APP_URL_BK_LOCAL;
  URL_API = process.env.REACT_APP_API_BK_LOCAL;
  URL_WS_COMPROBAR = process.env.REACT_APP_URL_COMPROBAR_DNI_REPLICA;
  URL_WS_RESULTADOS = process.env.REACT_APP_URL_RESULTADOS_LOCAL;
  URL_APP = process.env.REACT_APP_URL_LOCAL;
}
if (process.env.REACT_APP_ENV === "replica") {
  URL_BACK = process.env.REACT_APP_URL_BK_REPLICA;
  URL_API = process.env.REACT_APP_API_BK_REPLICA;
  URL_WS_COMPROBAR = process.env.REACT_APP_URL_COMPROBAR_DNI_REPLICA;
  URL_WS_RESULTADOS = process.env.REACT_APP_URL_RESULTADOS_REPLICA;
  URL_APP = process.env.REACT_APP_URL_REPLICA;
}
if (process.env.REACT_APP_ENV === "produccion") {
  URL_BACK = process.env.REACT_APP_URL_BK_PRODUCCION;
  URL_API = process.env.REACT_APP_API_BK_PRODUCCION;
  URL_WS_COMPROBAR = process.env.REACT_APP_URL_COMPROBAR_DNI_PRODUCCION;
  URL_WS_RESULTADOS = process.env.REACT_APP_URL_RESULTADOS_PRODUCCION;
  URL_APP = process.env.REACT_APP_URL_PRODUCCION;
}
const TOKEN = process.env.REACT_APP_TOKEN;
const APP_ID = parseInt(process.env.REACT_APP_APP_ID);
const ERROR_TOKEN = "Security Token incorrecto ó caducado";
const DEFAULT_COLOR = "#266AAD";
const DEFAULT_LABEL_COLOR = "#143c75";

/* json - mongo */
const TYPE_FORM = process.env.REACT_APP_TYPE_FORM;

export {
  URL_APP,
  URL_GET_TOKEN,
  URL_BACK,
  URL_WS_COMPROBAR,
  URL_WS_RESULTADOS,
  URL_API,
  TOKEN,
  APP_ID,
  ERROR_TOKEN,
  TYPE_FORM,
  DEFAULT_COLOR,
  DEFAULT_LABEL_COLOR,
};
