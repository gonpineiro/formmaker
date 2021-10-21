import { getForm } from "../../utils";

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
