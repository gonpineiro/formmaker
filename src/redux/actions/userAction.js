import axios from "axios";
import { getParams } from "../../utils";
import { TRAER_DATOS } from "../types/userTypes";

import { URL_GET_TOKEN } from "../../config/const";

export const traerDatosSession = () => async (dispatch) => {
  axios.get(URL_GET_TOKEN + getParams().SESSIONKEY).then((res) => {
    dispatch({
      type: TRAER_DATOS,
      payload: res.data,
    });
  });
};
