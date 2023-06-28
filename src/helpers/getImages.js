import axios from 'axios';

const getImages = async (q, page) => {
  const URL = `https://pixabay.com/api/`;
  const config = {
    params: {
      key: `37000038-08c197fed85e53f2f4c993b0f`,
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 30,
    },
  };

  const response = await axios.get(URL, config);
  return response.data;
};

export default getImages;
