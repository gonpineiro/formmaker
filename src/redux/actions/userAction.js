import { getParams } from "../../utils";
import { TRAER_DATOS, VISITANTE } from "../types/userTypes";

import { URL_GET_TOKEN } from "../../config/config";

export const traerDatosSession = () => async (dispatch) => {
  const sessionKey = getParams().SESSIONKEY;

  if (sessionKey) {
    const response = await fetch(URL_GET_TOKEN + getParams().SESSIONKEY);
    const data = await response.json();
    console.log(data);
    dispatch({
      type: TRAER_DATOS,
      payload: data,
    });
  } else {
    dispatch({
      type: VISITANTE,
      payload: false,
    });
  }
};
