const ENVIRONMENT = process.env.REACT_APP_ENV || 'production';
const DEV_API_URL = 'http://127.0.0.1:8000';
const PREFIX = '/api/';

const getApiURL = API_URL => (ENVIRONMENT === 'dev' ? DEV_API_URL : API_URL);

const config = {
  apiURL: 'https://investor.scrambleup.com' + PREFIX,
  facebookAppId: '2561139147477795'
};

export default config;
