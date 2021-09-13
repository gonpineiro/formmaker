import qs from "qs";
import { TOKEN, URL_BACK } from "../config/config";

const getAllForms = async () => {
  const data = {
    token: TOKEN,
    type: "get-all-form",
  };
  const req = await fetch(URL_BACK, {
    method: "POST",
    body: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  const res = await req.json();
  return res;
};

export default getAllForms;
