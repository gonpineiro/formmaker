const URL_GET_TOKEN = process.env.REACT_APP_URL_GET_TOKEN;
let URL_BACK;
let URL_API;
if (process.env.REACT_APP_ENV === "local") {
  URL_BACK = process.env.REACT_APP_URL_BK_LOCAL;
  URL_API = process.env.REACT_APP_API_BK_LOCAL;
}
if (process.env.REACT_APP_ENV === "replica") {
  URL_BACK = process.env.REACT_APP_URL_BK_REPLICA;
  URL_API = process.env.REACT_APP_API_BK_REPLICA;
}
if (process.env.REACT_APP_ENV === "produccion") {
  URL_BACK = process.env.REACT_APP_URL_BK_PRODUCCION;
  URL_API = process.env.REACT_APP_API_BK_PRODUCCION;
}
const TOKEN = process.env.REACT_APP_TOKEN;
const APP_ID = parseInt(process.env.REACT_APP_APP_ID);
const ERROR_TOKEN = "Security Token incorrecto ó caducado";

export { URL_GET_TOKEN, URL_BACK, URL_API, TOKEN, APP_ID, ERROR_TOKEN };
