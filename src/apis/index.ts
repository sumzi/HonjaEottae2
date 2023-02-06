import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    MobileOS: 'ETC',
    MobileApp: 'honjaeottae2',
    _type: 'json',
  },
});

export default client;
