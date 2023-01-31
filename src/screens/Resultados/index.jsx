import { useEffect, useState } from "react";

import { BasicButton, Loading, Message } from "../../components";
import { URL_WS_RESULTADOS } from "../../config/config";
import { getAllForms, renameTab } from "../../utils";

//redux
import { connect } from "react-redux";
import * as userAction from "../../redux/actions/userAction";

const getIdsForms = async (setForms, dataUser) => {
  /*console.log("dataUser: " + JSON.stringify(dataUser));
  console.log("dni get: " + dataUser.dni);*/
  let dniU;
  (dataUser.profile == 2 || dataUser.profile == '2' ? dniU = dataUser.dni : dataUser.dniU = null);
  let forms = await getAllForms(dniU);
  forms = Object.values(forms);
  forms = forms.filter((item) => item !== null);
  setForms(Object.values(forms));
  //console.log("forms: "+JSON.stringify(forms))
};

const Resultados = ({ userReducer }) => {
  //console.log("user: "+JSON.stringify(userReducer));
  const { isAdmin, dniLoggedUser } = userReducer;
  /*console.log("adm: " + JSON.stringify(isAdmin));
  console.log("dni: " + JSON.stringify(dniLoggedUser));*/
  const [forms, setForms] = useState([]);
  const [dataUser, setDataUser] = useState({ profile: isAdmin, dni: dniLoggedUser });
  useEffect(() => {
    getIdsForms(setForms, dataUser);
  }, []);

  if (forms.length === 0) return <Loading />;

  renameTab("Csv Formularios");

  return (

    <div className="container pt-5 px-4">
      <h2 className="titulo text-center">Resultados de Formularios</h2>
      {(forms.length > 0 && forms[0] !== "Error a obtener los forms de formularios") ?
        <div className="row pt-5">
          <div className="col-12 col-md-6 mx-auto">
            {
              forms.map((form, key) => (
                <div key={key} className="row">
                  <div
                    className="alert d-flex justify-content-between align-items-center"
                    style={{ backgroundColor: "#5997d1", color: "white" }}
                    role="alert"
                  >
                    <div>{form.nombre}</div>
                    <div>
                      <a
                        href={
                          URL_WS_RESULTADOS + form.id + "&nombreForm=" + form.nombre
                        }
                        rel="noreferrer"
                      // style="text-decoration: none;"
                      >
                        <BasicButton
                          // handlerClick={(event) => { handlerPreview(form.id) }}
                          classname="btn btn-dark my-auto "
                          label="Descargar .csv"
                          icon={'file_download'}
                        />
                        {/* <button type="button" className="btn btn-dark d-flex">
                          Descargar .csv <i class="material-icons text-white ms-2 my-auto">file_download</i>
                        </button> */}
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        :
        <Message message={"No se encontraron formularios asignados a su usuario."} />
      }
    </div>
  );
};

//export default Resultados;

const mapStateToProps = ({ userReducer }) => {
  return { userReducer };
};

export default connect(mapStateToProps, userAction)(Resultados);