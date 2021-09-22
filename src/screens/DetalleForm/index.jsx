import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFormById } from "../../api";
import { Loading } from "../../components";

import "./index.scss";

const DetalleForm = () => {
  const [form, setForm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getFormById(id).then(({ data: { data } }) => {
      setForm(data);
    });
  }, [id]);

  if (!form) return <Loading />;

  return (
    <div className="container">
      <h2 className="titulo text-center">DetalleForm</h2>
      <div className="row mt-5"></div>
    </div>
  );
};

export default DetalleForm;
