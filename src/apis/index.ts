import axios from 'axios';

const client = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    MobileOS: 'ETC',
    MobileApp: 'honjaeottae2',
    _type: 'json',
  },
});

export default client;
