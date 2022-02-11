export default class ExchangeRate {
  static getCurrency() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url =
        "https://v6.exchangerate-api.com/v6/e3df05c6193f60cb2d42e0bb/latest/USD";
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}
