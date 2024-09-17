const YahooFinanceClient = require('./src/financeAPI');

async function main() {
  const apiClient = new YahooFinanceClient('API_KEY', 'API_HOST');

  try {
    const activeOptions = await apiClient.getMostActiveOptions('STOCKS');
    console.log('Most Active Stock Options:', activeOptions);

    const stockModules = await apiClient.getStockModules('AAPL', 'asset-profile');
    console.log('Stock Modules:', stockModules);

    const marketNews = await apiClient.getMarketNews('NVDA', 'ALL');
    console.log('Market News:', marketNews);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
