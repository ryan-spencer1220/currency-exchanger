export default class ExchangeRate {
  static async getCurrency(firstCurrency, secondCurrency) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${firstCurrency}/${secondCurrency}`
      );
      if (!response.ok) {
        throw Error(response.status);
      }
      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
}
