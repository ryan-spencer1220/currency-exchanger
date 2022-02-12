export default class ExchangeRateToUSD {
  static getCurrencyToUSD(currencyType) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currencyType}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else if (this.status === 404) {
          reject("404 Not Found: Incorrect Currency");
        } else if (this.status === 403) {
          reject("403 Forbidden: Incorrect API Key Entered");
        } else if (this.status === 401) {
          reject("401 Unauthorized: API Key Has Not Been Authenticated");
        } else if (this.status === 400) {
          reject("403 Forbidden: You Do Not Have Permission To Access URL");
        } else if (this.status === 429) {
          reject(
            "429 Too Many API Requests: Increase Subscription Plan Or Contact Admin"
          );
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
