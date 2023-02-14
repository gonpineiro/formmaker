import { getForm, renameTab } from "../../utils";

import { TYPE_FORM } from "../../config/config";
import { getFormById } from "../../api";

export const getFormData = async (setElements, setLoading, idForm) => {
  // setElements(null);
  if (TYPE_FORM === "json") {
    const formData = await getForm(idForm);
    if (!formData.error) {
      // console.log("formulario inicial:");
      // console.log(formData);
      formData.fields = formData.fields.sort(
        (a, b) => a.field_order - b.field_order
      );
      setElements(formData);
      (formData.nombre ? renameTab("Formulario "+formData.nombre) : renameTab("Formularios Dinámicos")) //para cambiar el titulo de la pestaña
    } else {
      setElements(undefined);
    }
    setLoading(false);
  }

  if (TYPE_FORM === "mongo") {
    let formData = await getFormById(idForm);
    formData = formData.data.data;
    formData.fields = formData.fields.sort(
      (a, b) => a.field_order - b.field_order
    );
    setElements(formData);
    setLoading(false);
  }
};
