import axios from 'axios';

const blingapi = axios.create({
  baseURL: 'https://bling.com.br/Api/v2',
});

export default blingapi;
