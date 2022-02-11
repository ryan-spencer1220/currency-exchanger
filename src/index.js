import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeRate from "./js/currency.js";

$(document).ready(function () {
  $("#conversion-calculator").click(function () {
    let currencyType = $("#currency-type").val();
    let amount = $("#amount").val();
    let promise = ExchangeRate.getCurrency();
    promise.then(
      function (response) {
        const body = JSON.parse(response);
        $(".display").text(`${body.conversion_rates.AED}`);
        if (currencyType === "USD") {
          $(".display").text(
            `Currency Type = ${currencyType} Amount = ${amount} Conversion Rate = ${body.conversion_rates.USD}`
          );
          $(".multiply").text(`${amount * body.conversion_rates.USD}`);
        } else if (currencyType === "EUR") {
          $(".display").text(
            `Currency Type = ${currencyType} Amount = ${amount} Conversion Rate = ${body.conversion_rates.EUR}`
          );
          $(".multiply").text(`${amount * body.conversion_rates.EUR}`);
        } else if (currencyType === "JPY") {
          $(".display").text(
            `Currency Type = ${currencyType} Amount = ${amount} Conversion Rate = ${body.conversion_rates.JPY}`
          );
          $(".multiply").text(`${amount * body.conversion_rates.JPY}`);
        } else if (currencyType === "CAD") {
          $(".display").text(
            `Currency Type = ${currencyType} Amount = ${amount} Conversion Rate = ${body.conversion_rates.CAD}`
          );
        } else if (currencyType === "MXN") {
          $(".display").text(
            `Currency Type = ${currencyType} Amount = ${amount} Conversion Rate = ${body.conversion_rates.MXN}`
          );
        } else if (currencyType === "CNY") {
          $(".display").text(
            `Currency Type = ${currencyType} Amount = ${amount} Conversion Rate = ${body.conversion_rates.CNY}`
          );
        } else {
          $(".display").text(
            `There was an error processing your request: You must enter an actual form of currency!`
          );
        }
      },
      function (error) {
        $(".showErrors").text(
          `There was an error processing your request: ${error}`
        );
      }
    );
  });
});

// function displayExchangeRates(exchangeRates) {
//   let amount = $("#amount").val();
//   let stringObject = JSON.stringify(exchangeRates);
//   $(".display").html(`${stringObject}`);
//   if (amount === "") {
//     return $(".multiply").html("Please enter an amount!");
//   } else {
//     return $(".multiply").html(amount * exchangeRates);
//   }
// }

// function displayErrors(error) {
//   let errorObject = JSON.stringify(error);
//   $(".error").text(`${errorObject}`);
// }

// $(document).ready(function () {
//   $("#conversion-calculator").click(function () {
//     let currency = $("#currency-type").val();
//     ExchangeRate.getCurrency(currency)
//       .then(function (response) {
//         if (response instanceof Error) {
//           throw Error(`ExchangeRate-API error ${response}`);
//         }
// if (currency === "USD") {
//   return displayExchangeRates(response.conversion_rates.USD);
// } else if (currency === "EUR") {
//   return displayExchangeRates(response.conversion_rates.EUR);
// } else if (currency === "JPY") {
//   return displayExchangeRates(response.conversion_rates.JPY);
// } else if (currency === "CAD") {
//   return displayExchangeRates(response.conversion_rates.CAD);
// } else if (currency === "MXN") {
//   return displayExchangeRates(response.conversion_rates.MXN);
// } else if (currency === "CNY") {
//   return displayExchangeRates(response.conversion_rates.CNY);
// } else if (currency === "Epicodus Bucks") {
//   return displayErrors(response);
// } else {
//   displayErrors(response);
// }
//       })
//       .catch(function (response) {
//         displayErrors(response);
//       });
//   });
// });
