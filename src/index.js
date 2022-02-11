import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeRate from "./js/currency";

function displayExchangeRates(exchangeRates) {
  $(".display").text(`The weather is ${exchangeRates}!`);
}

function displayErrors(error) {
  $(".error").text(`${error}`);
}

$(document).ready(function () {
  $("#conversion-calculator").click(function () {
    clearFields();
    ExchangeRate.getCurrency()
      .then(function (response) {
        if (response instanceof Error) {
          throw Error(`ExchangeRate-API API error: ${response.result}`);
        }
        const conversionRates = response.conversion_rates;
        return displayExchangeRates(conversionRates);
      })
      .catch(function (error) {
        displayErrors(error.message);
      });
  });
});
