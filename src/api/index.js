import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3005/api",
});

export const insertForm = (payload) => api.post(`/form`, payload);
export const getAllForms = () => api.get(`/form`);
export const updateFormById = (id, payload) => api.put(`/form/${id}`, payload);
export const deleteFormById = (id) => api.delete(`/form/${id}`);
export const getFormById = (id) => api.get(`/form/${id}`);

const apis = {
  insertForm,
  getAllForms,
  updateFormById,
  deleteFormById,
  getFormById,
};

export default apis;
