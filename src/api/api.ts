import {API_KEY, TOKEN, BASE_URL} from '@env';

const baseUrl = BASE_URL;

const headerMain = {
  apikey: API_KEY,
  Authorization: `Bearer ${TOKEN}`,
};

const headerPost = {
  'Content-Type': 'application/json',
  Prefer: 'return=representation',
};

const headerPostEdit = {
  'Content-Type': 'application/json',
  Prefer: 'resolution=merge-duplicates',
};

const api = {
  getProfile: function () {
    return fetch(`${baseUrl}/perfil`, {
      method: 'GET',
      headers: {
        ...headerMain,
      },
    });
  },
  getExperiences: function () {
    return fetch(`${baseUrl}/experience`, {
      method: 'GET',
      headers: {
        ...headerMain,
      },
    });
  },
  saveExperience: function (formData: any) {
    if (formData.id) {
      return fetch(`${baseUrl}/experience`, {
        method: 'POST',
        headers: {
          ...headerMain,
          ...headerPostEdit,
        },
        body: JSON.stringify(formData),
      });
    }

    return fetch(`${baseUrl}/experience`, {
      method: 'POST',
      headers: {
        ...headerMain,
        ...headerPost,
      },
      body: JSON.stringify(formData),
    });
  },
};

export default api;
