import { useEffect, useState } from "react";

import { BasicButton, Loading, Message } from "../../components";
// import { URL_WS_PREVISUALIZACION } from "../../config/config";
import { getAllForms, renameTab } from "../../utils";
import { getFormData } from "../Formulario/getForms";

//redux
import { connect } from "react-redux";
import * as userAction from "../../redux/actions/userAction";
import Preview from "../Preview";
import AlertMessage from "../../components/Alert";
import { Crear } from "..";


const getIdsForms = async (setForms, setLoading, dataUser) => {
    let dniU;
    (dataUser.profile == 2 || dataUser.profile == '2' ? dniU = dataUser.dni : dataUser.dniU = null);
    let forms = await getAllForms(dniU);
    forms = Object.values(forms);
    forms = forms.filter((item) => item !== null);
    setForms(Object.values(forms));
    setLoading(false);
};

const Previsualizacion = ({ userReducer }) => {
    const { isAdmin, dniLoggedUser } = userReducer;
    const [forms, setForms] = useState([]);
    const [preview, setPreview] = useState(false);
    const [replicate, setReplicate] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [elements, setElements] = useState(null);
    const [loading, setLoading] = useState(true);

    const [dataUser, setDataUser] = useState({ profile: isAdmin, dni: dniLoggedUser });

    const {
        hcolor,
        banner,
        description,
        fields,
        terminosCondiciones,
        nombre,
        estado,
    } = elements ?? {};

    useEffect(() => {
        getIdsForms(setForms, setLoading, dataUser);
    }, []);

    const handlerPreview = async (idForm) => {
        setLoading(true);
        if (idForm) {
            await getFormData(setElements, setLoading, idForm);
            setPreview(true)
        } else {
            setAlertMessage("No se recibio informacion del formulario")
        }
    };

    const handlerReplicate = async (idForm) => {
        setLoading(true);
        if (idForm) {
            await getFormData(setElements, setLoading, idForm);

            setReplicate(true)
        } else {
            setAlertMessage("No se recibio informacion del formulario")
        }
    };

    if (replicate) return <Crear replicarFormulario={elements} setReplicate={setReplicate} buttonMessage={"Regresar"} />;

    if (preview) return <Preview formulario={elements} setPreview={setPreview} buttonMessage={"Regresar"} />;

    if (loading) return <Loading />;

    renameTab("Previsualizar Formularios");

    return (

        <div className="container pt-5 px-4">
            <h2 className="titulo text-center">Previsualizaci&oacute;n de Formularios</h2>
            {
                (alertMessage != '' ?
                    <AlertMessage message={alertMessage} color={'danger'}></AlertMessage>
                    : '')
            }

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
                                        <div className="d-flex">
                                            <BasicButton
                                                handlerClick={(event) => { handlerPreview(form.id) }}
                                                classname="btn btn-dark my-auto ms-1"
                                                label="Previsualizar"
                                                icon={'remove_red_eye'}
                                            />
                                            {isAdmin ?
                                                <BasicButton
                                                    handlerClick={(event) => { handlerReplicate(form.id) }}
                                                    classname="btn btn-dark my-auto ms-1"
                                                    label="Replicar"
                                                    icon={'content_copy'}
                                                /> : ''
                                            }
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
// }

//export default Resultados;

const mapStateToProps = ({ userReducer }) => {
    return { userReducer };
};

export default connect(mapStateToProps, userAction)(Previsualizacion);