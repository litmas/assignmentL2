const financeAPI = require('./src/financeAPI');

/* async function activeOptions() {
  try {
    const activeOptions = await financeAPI.getMostActiveOptions('STOCKS');
    console.log('Most Active Stock Options:', activeOptions);
  } catch (error) {
    console.error('Error:', error);
  }
} */

/* async function stockModules() {
    try {
      const activeOptions = await financeAPI.getStockModules();
      console.log('Stock Modules:', activeOptions);
    } catch (error) {
      console.error('Error:', error);
    }
  } */

  async function marketNews() {
    try {
      const activeOptions = await financeAPI.getMarketNews();
      console.log('Stock Modules:', activeOptions);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  


/* activeOptions(); */
/* stockModules(); */
marketNews();


