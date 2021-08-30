import { TRAER_DATOS } from "../types/userTypes";

const INITIAL_STATE = {
  datosPersonales: [],
  userProfiles: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_DATOS:
      const app = action.payload.apps.filter((obj) => obj.id === 64);
      return {
        ...state,
        datosPersonales: action.payload.datosPersonales,
        userProfiles: app[0].userProfiles,
      };
    default:
      return state;
  }
};
