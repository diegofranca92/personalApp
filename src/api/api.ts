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
     const response = fetch(`${baseUrl}/experience`, {
      method: 'GET',
      headers: {
        ...headerMain,
      },
    });
    return response
  },
  saveExperience: function (formData: any) {
    if (formData.id) {
      const response = fetch(`${baseUrl}/experience`, {
        method: 'POST',
        headers: {
          ...headerMain,
          ...headerPostEdit,
        },
        body: JSON.stringify(formData),
      });
      return response
    }

    const response = fetch(`${baseUrl}/experience`, {
      method: 'POST',
      headers: {
        ...headerMain,
        ...headerPost,
      },
      body: JSON.stringify(formData),
    });
    return response
  },
};

export default api;
