import { APP_ID, ERROR_TOKEN } from "../../config/config";
import { TRAER_DATOS, VISITANTE } from "../types/userTypes";

const INITIAL_STATE = {
  datosPersonales: [],
  loading: true,
  error: null,
  isAdmin: "",
  dniLoggedUser: null,
  idForm: undefined,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  //console.log("Action: "+JSON.stringify(action));
  const payload = action.payload;

  switch (action.type) {
    case TRAER_DATOS:
      if (payload.datosPersonales.error === ERROR_TOKEN) {
        /* return {
          ...state,
          loading: false,
          error: "Hubo un error en el inicio de sesion",
        }; */
      }

      const datosPersonales = payload.datosPersonales;

      //console.log("data: "+JSON.stringify(datosPersonales));
      //console.log("data2: "+JSON.stringify(datosPersonales.datosPersonales));
      
      const app = datosPersonales.apps != undefined ? datosPersonales.apps.filter((obj) => obj.id === APP_ID)[0] : null;
      return {
        ...state,
        loading: false,
        datosPersonales,
        //isAdmin: /* app && app.userProfiles === "3" ? */ true/*  : false */,
        isAdmin: (app != null ? app.userProfiles : false),
        dniLoggedUser: (datosPersonales.datosPersonales != null &&  datosPersonales.datosPersonales != undefined ? datosPersonales.datosPersonales.documento : null),
        nombreUsuario: (datosPersonales.datosPersonales != null &&  datosPersonales.datosPersonales != undefined ? datosPersonales.datosPersonales.razonSocial : null),
        idForm: payload.idForm,
      };

    case VISITANTE:
      return {
        ...state,
        loading: false,
        isAdmin: payload.idAdmin,
        idForm: payload.idForm,
      };
    default:
      return state;
  }
};
