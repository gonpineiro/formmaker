const PROD = process.env.REACT_APP_PROD === "true";

export const URL_GET_TOKEN = process.env.REACT_APP_URL_GET_TOKEN;
export const URL_BACK = PROD
  ? process.env.REACT_APP_URL_BK_PROD
  : process.env.REACT_APP_URL_BK_DEV;
export const TOKEN = process.env.REACT_APP_TOKEN;
export const APP_ID = parseInt(process.env.REACT_APP_APP_ID);
export const ERROR_TOKEN = "Security Token incorrecto ó caducado";
