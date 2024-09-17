const axios = require('axios');

// Your RapidAPI credentials
const API_KEY = process.env.RAPIDAPI_KEY || '19668c176bmsha76050a4b747794p188878jsnd448d56c8fd9';
const API_HOST = 'yahoo-finance15.p.rapidapi.com';
const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets';

// Utility function to make requests
async function makeRequest(endpoint, params = {}) {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params,
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
}

// Function to get most active stock options
async function getMostActiveOptions(type = 'STOCKS') {
  return await makeRequest('options/most-active', { type });
}

// Function to get stock quote by symbol
async function getStockQuote(symbol) {
  return await makeRequest(`quote/${symbol}`);
}

// Function to get historical stock data
async function getHistoricalData(symbol, startDate, endDate) {
  return await makeRequest(`historical/${symbol}`, { start: startDate, end: endDate });
}

// Export all functions as part of the module
module.exports = {
  getMostActiveOptions,
  getStockQuote,
  getHistoricalData
};
