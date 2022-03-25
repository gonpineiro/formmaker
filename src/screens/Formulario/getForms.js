import { getForm } from "../../utils";

import { TYPE_FORM } from "../../config/config";
import { getFormById } from "../../api";

export const getFormData = async (setElements, setLoading, idForm) => {
  if (TYPE_FORM === "json") {
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
