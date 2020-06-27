import axios from 'axios';

const { REACT_APP_API_ENDPOINT } = process.env;

axios.defaults.baseURL = REACT_APP_API_ENDPOINT;
