import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeRate from "./js/currency";

function displayExchangeRates(exchangeRates) {
  let stringObject = JSON.stringify(exchangeRates);
  $(".display").html(`${stringObject}`);
}

function displayErrors(error) {
  $(".error").text(`${error}`);
}

$(document).ready(function () {
  $("#conversion-calculator").click(function () {
    let currency = $("#currency-type").val();
    console.log(currency);
    ExchangeRate.getCurrency(currency)
      .then(function (response) {
        if (response instanceof Error) {
          throw Error(`ExchangeRate-API error: ${response.result}`);
        }
        const conversionRate = response.conversion_rates;
        console.log(conversionRate);
        return displayExchangeRates(conversionRate);
      })
      .catch(function (error) {
        displayErrors(error.message);
      });
  });
});
