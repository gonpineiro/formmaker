import qs from "qs";
import { TOKEN, URL_BACK } from "../config/config";

const form = {
  id: 1,
  nombre: "nombre",
  description: "Esto es algo logo",
  banner:
    "https://www.neuquencapital.gov.ar/wp-content/uploads/2020/05/portada-wifi-1-1536x252.png",
  terminosCondiciones: ["required", "texto"],
  inputs: [
    {
      orden: 1,
      type: "number",
      label: "algo",
      min_lenght: 10,
      max_lenght: 10,
      required: true,
      placeholder: "ejemplo",
    },
    {
      orden: 2,
      type: "text",
      label: "algo",
      min_lenght: 10,
      max_lenght: 10,
      required: false,
      placeholder: "ejemplo",
    },
    {
      orden: 3,
      type: "radiobutton",
      label: "algo",
      min_lenght: 10,
      max_lenght: 10,
      required: false,
      placeholder: "ejemplo",
      opciones: ["opcion1", "opcion2", "opcion3"],
    },
    {
      orden: 3,
      type: "select",
      label: "algo",
      min_lenght: 10,
      max_lenght: 10,
      required: false,
      placeholder: "ejemplo",
      descipcionSelect: "seleccione uno",
      opciones: ["opcion1", "opcion2", "opcion3"],
    },
    {
      orden: 3,
      type: "date",
      label: "algo",
      min_lenght: 10,
      max_lenght: 10,
      required: false,
    },
    {
      orden: 3,
      type: "file",
      label: "algo",
      size: "mb",
      required: false,
      tipos: ["pdf", "image"],
    },
  ],
};

const postData = async (data, type) => {
  data.token = TOKEN;
  data.type = type;
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
