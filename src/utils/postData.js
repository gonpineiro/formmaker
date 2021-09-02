import qs from "qs";
import { TOKEN, URL_BACK } from "../config/config";

const postData = async (data) => {
  data.token = TOKEN;
  const req = await fetch(URL_BACK, {
    method: "POST",
    body: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });
  const res = await req.json();
  console.log(res);
  return res;
};

export default postData;