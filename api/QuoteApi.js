import axios from 'axios';
import { showToast } from '../components/utils/ToastUtils';

export const AxiosApiCall = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      params: {
        language_code: 'ru',
      },
      headers: {
        'x-rapidapi-key': '0b4d1c5defmsh0f02d1a8c3bd8d6p13bcfdjsn6b8f346cf62f',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    return {
      quote: response.data.content,
      source: response.data.originator.name,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 429) {
      showToast();
    } else {
      console.error(error);
    }
  }
};

export const FetchApiCall = async () => {
  try {
    const url =
      'https://quotes15.p.rapidapi.com/quotes/random/?language_code=ru';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '0b4d1c5defmsh0f02d1a8c3bd8d6p13bcfdjsn6b8f346cf62f',
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    return {
      quote: result.content,
      source: result.originator.name,
    };
  } catch (error) {
    if (error.name === 'TypeError') {
      showToast();
    } else {
      console.error('Произошла ошибка:', error);
    }
  }
};
