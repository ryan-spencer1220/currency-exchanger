export default class ExchangeRate {
  static getCurrency() {
    return fetch(
      `https://v6.exchangerate-api.com/v6/e3df05c6193f60cb2d42e0bb/latest/USD/`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.result);
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      });
  }
}
