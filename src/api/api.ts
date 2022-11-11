const baseUrl = 'https://kyoywntqsmqhwsxkrktm.supabase.co/rest/v1';

const headerMain = {
  apikey:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2MDcyMTcsImV4cCI6MTk4MzE4MzIxN30.vlQ2lfa6Q9C7UrzRuhTfvLHiIy0UQ0zIQ-P2u5g1FIY',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5b3l3bnRxc21xaHdzeGtya3RtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzYwNzIxNywiZXhwIjoxOTgzMTgzMjE3fQ.eRSROClaIhmlqRETuHpGass8cpdx10FwIt5T4vNcDlY',
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
