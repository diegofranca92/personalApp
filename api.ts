import axiosConfig from './axiosConfig';

const api = {
  listar: function () {
    return axiosConfig.get('experience');
  },
  // salvar: function (form) {
  //   if (form.id) {
  //     return axiosConfig.put('experience');
  //   }
  //   return axiosConfig.post('experience');
  // },
  // excluir: function (form) {
  //   return axiosConfig.delete(`experience`, form);
  // },
  // buscar: function (id) {
  //   return axiosConfig.get(`experience/${id}`);
  // },
};

export default api;
