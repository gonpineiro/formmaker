import axios from "axios";

const getUserData = () => {
  try {
    return axios.get(
      "https://weblogin.muninqn.gov.ar/api/getUserByToken/" +
        getData().SESSIONKEY
    );
  } catch (error) {
    alert(error); // catches both errors
  }
};

const getData = () => {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  const keys = [...searchParams.keys()];

  return keys.reduce(
    (obj, key) => ({ ...obj, [key]: searchParams.get(key) }),
    {}
  );
};

export default getUserData;
