const axios = require('axios');

class YahooFinanceClient {
  constructor() {
    this.baseHeaders = {
      'x-rapidapi-key': '19668c176bmsha76050a4b747794p188878jsnd448d56c8fd9',
      'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com'
    };
  }

  async getMostActiveOptions(type = 'STOCKS') {
    const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/options/most-active';
    return this._fetchData(BASE_URL, { type });
  }

  async getStockModules(ticker = 'AAPL', module = 'asset-profile') {
    const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules';
    return this._fetchData(BASE_URL, { ticker, module });
  }

  async getMarketNews(tickers = 'NVDA', type = 'ALL') {
    const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/v2/markets/news';
    return this._fetchData(BASE_URL, { tickers, type });
  }

  async _fetchData(url, params) {
    try {
      const response = await axios.get(url, {
        params,
        headers: this.baseHeaders
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      throw error;
    }
  }
}

module.exports = YahooFinanceClient;
