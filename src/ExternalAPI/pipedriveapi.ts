import axios from 'axios';

const pipedriveapi = axios.create({
  baseURL: 'https://api.pipedrive.com/v1',
});

export default pipedriveapi;
