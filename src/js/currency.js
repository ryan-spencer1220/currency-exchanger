export default class ExchangeRate {
  static getCurrency() {
    return fetch(
      `https://v6.exchangerate-api.com/v6/1de6bfcc2daf8b313f6c2363/latest/USD/`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      });
  }
}
