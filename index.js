const financeAPI = require('./financeAPI');

async function main() {
  try {
    const mostActiveOptions = await financeAPI.getMostActiveOptions('STOCKS');
    console.log('Most Active Stock Options:', mostActiveOptions);

    const stockQuote = await financeAPI.getStockQuote('AAPL');
    console.log('Apple Stock Quote:', stockQuote);

    const historicalData = await financeAPI.getHistoricalData('AAPL', '2023-01-01', '2023-12-31');
    console.log('Apple Historical Data:', historicalData);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
