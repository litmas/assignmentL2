const axios = require('axios');

// Your RapidAPI credentials
const API_KEY = '19668c176bmsha76050a4b747794p188878jsnd448d56c8fd9';
const API_HOST = 'yahoo-finance15.p.rapidapi.com';

// Function to get most active stock options
async function getMostActiveOptions(type = 'STOCKS') {
    const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/options/most-active';
  try {
    const response = await axios.get(BASE_URL, {
      params: { type },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching most active options:', error);
    throw error;
  }
}

async function getStockModules() {
    const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules'

try {
    const response = await axios.get(BASE_URL, {
        params: {
            ticker: 'AAPL',      // user should be able to choose which stock to see here. Like TSLA or AAPL etc. 
            module: 'asset-profile'
          },
          headers: {
               'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
          }
        })
        return response.data;
    } catch (error) {
      console.error('Error fetching stock modules:', error);
      throw error;
    }
  }

  async function getMarketNews() {
    const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/v2/markets/news'

try {
    const response = await axios.get(BASE_URL, {
        params: {
            tickers: 'NVDA',                        // how do these two lines work? The user should be able to send specific information to this and then get news related to that topic.
            type: 'ALL'
          },
          headers: {
               'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
          }
        })
        return response.data;
    } catch (error) {
      console.error('Error fetching market news:', error);
      throw error;
    }
  }

// Export the function
module.exports = {
  getMostActiveOptions,
  getStockModules,
  getMarketNews
};

