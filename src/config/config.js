const URL_GET_TOKEN = process.env.REACT_APP_URL_GET_TOKEN;
let URL_BACK;
if (process.env.REACT_APP_ENV === "local") {
  URL_BACK = process.env.REACT_APP_URL_BK_LOCAL;
}
if (process.env.REACT_APP_ENV === "replica") {
  URL_BACK = process.env.REACT_APP_URL_BK_REPLICA;
}
if (process.env.REACT_APP_ENV === "produccion") {
  URL_BACK = process.env.REACT_APP_URL_BK_PRODUCCION;
}
const TOKEN = process.env.REACT_APP_TOKEN;
const APP_ID = parseInt(process.env.REACT_APP_APP_ID);
const ERROR_TOKEN = "Security Token incorrecto ó caducado";

export { URL_GET_TOKEN, URL_BACK, TOKEN, APP_ID, ERROR_TOKEN };
