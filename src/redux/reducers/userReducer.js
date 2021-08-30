import { APP_ID, ERROR_TOKEN } from "../../config/const";
import { TRAER_DATOS, VISITANTE } from "../types/userTypes";

const INITIAL_STATE = {
  datosPersonales: [],
  loading: true,
  error: null,
  isAdmin: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  const payload = action.payload;

  switch (action.type) {
    case TRAER_DATOS:
      if (payload.error === ERROR_TOKEN) {
        return {
          ...state,
          loading: false,
          error: "Hubo un error en el inicio de sesion",
        };
      }
      const app = payload.apps.filter((obj) => obj.id === APP_ID)[0];
      return {
        ...state,
        loading: false,
        datosPersonales: payload.datosPersonales,
        isAdmin: app.userProfiles === "3" ? true : false,
      };

    case VISITANTE:
      return {
        ...state,
        loading: false,
        isAdmin: payload,
      };
    default:
      return state;
  }
};
