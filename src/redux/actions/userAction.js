import axios from "axios";
import { getParams } from "../../utils";
import { TRAER_DATOS, VISITANTE } from "../types/userTypes";

import { URL_GET_TOKEN } from "../../config/const";

export const traerDatosSession = () => async (dispatch) => {
  const sessionKey = getParams().SESSIONKEY;

  if (sessionKey) {
    console.log(getParams().SESSIONKEY);
    axios.get(URL_GET_TOKEN + getParams().SESSIONKEY).then((res) => {
      dispatch({
        type: TRAER_DATOS,
        payload: res.data,
      });
    });
  } else {
    dispatch({
      type: VISITANTE,
      payload: false,
    });
  }
};
