import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeRate from "./js/currency";

function displayExchangeRates(exchangeRates) {
  let amount = $("#amount").val();
  let stringObject = JSON.stringify(exchangeRates);
  $(".display").html(`${stringObject}`);
  if (amount === "") {
    return $(".multiply").html("Please enter an amount!");
  } else {
    return $(".multiply").html(amount * exchangeRates);
  }
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
        if (currency === "USD") {
          return displayExchangeRates(response.conversion_rates.USD);
        } else if (currency === "EUR") {
          return displayExchangeRates(response.conversion_rates.EUR);
        } else if (currency === "JPY") {
          return displayExchangeRates(response.conversion_rates.JPY);
        } else if (currency === "CAD") {
          return displayExchangeRates(response.conversion_rates.CAD);
        } else if (currency === "MXN") {
          return displayExchangeRates(response.conversion_rates.MXN);
        } else if (currency === "CNY") {
          return displayExchangeRates(response.conversion_rates.CNY);
        } else if (currency === "Epicodus Bucks") {
          return displayErrors(response.error.message);
        } else {
          displayErrors(response.error);
        }
      })
      .catch(function (error) {
        displayErrors(error);
      });
  });
});
