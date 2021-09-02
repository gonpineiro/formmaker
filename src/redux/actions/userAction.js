import { getParams } from "../../utils";
import { TRAER_DATOS, VISITANTE } from "../types/userTypes";

import { URL_GET_TOKEN } from "../../config/config";

export const traerDatosSession = () => async (dispatch) => {
  const sessionKey = getParams().SESSIONKEY;

  if (sessionKey) {
    const response = await fetch(URL_GET_TOKEN + sessionKey);
    const datosPersonales = await response.json();

    const data = {
      sessionKey,
      datosPersonales,
      idForm: getParams().idForm,
    };

    dispatch({
      type: TRAER_DATOS,
      payload: data,
    });
  } else {
    const data = {
      idForm: getParams().idForm,
      idAdmin: false,
    };

    dispatch({
      type: VISITANTE,
      payload: data,
    });
  }
};
