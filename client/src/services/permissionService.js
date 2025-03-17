import axios from 'axios';

const API_URL = 'http://localhost:5000/api/permissions';

const permissionService = {
  getAll: () => axios.get(API_URL).then(res => res.data),
  create: (permission) => axios.post(API_URL, permission).then(res => res.data),
  update: (id, permission) => axios.put(`${API_URL}/${id}`, permission).then(res => res.data),
  delete: (id) => axios.delete(`${API_URL}/${id}`).then(res => res.data),
};

export default permissionService;

