import { getForm } from "../../utils";
import JSONForm from "../../otro.json";

// eslint-disable-next-line no-unused-vars
export const getFormData = async (setElements, setLoading, idForm) => {
  const formData = await getForm(idForm);
  if (!formData.error) {
    formData.fields = formData.fields.sort(
      (a, b) => a.field_order - b.field_order
    );
    setElements(formData);
  } else {
    setElements(undefined);
  }
  setLoading(false);
};

export const getFormDataByJson = (setElements, setLoading, idForm) => {
  const json = JSONForm[idForm];
  if (json) {
    json.fields = json.fields.sort((a, b) => a.field_order - b.field_order);
    setElements(json);
  }
  setLoading(false);
};