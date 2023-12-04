import axios from 'axios';

const ExchangeRateServices = {
  getExchangeRateUF: async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL_EXCHANGE_RATE_UF);
    return response.data;
  },
};

export default ExchangeRateServices;