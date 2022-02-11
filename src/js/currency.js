export default class WeatherService {
  static getWeather(city) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/e3df05c6193f60cb2d42e0bb/latest/${currency}/`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}

// export default class ExchangeRate {
//   static getCurrency(currency) {
//     return fetch(
//       `https://v6.exchangerate-api.com/v6/e3df05c6193f60cb2d42e0bb/latest/${currency}/`
//     )
//       .then(function (response) {
//         if (!response.ok) {
//           throw Error(response);
//         }
//         return response.json();
//       })
//       .catch(function (error) {
//         return Error(error);
//       });
//   }
// }
