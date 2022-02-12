import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeRate from "./js/currency.js";
import ExchangeRateToUSD from "./js/currency-to-USD.js";

$(document).ready(function () {
  $("#conversion-calculator").click(function () {
    let currencyType = $("#currency-type").val();
    let amount = $("#amount").val();
    let promise = ExchangeRate.getCurrency();
    promise.then(
      function (response) {
        const body = JSON.parse(response);
        if (currencyType === "USD") {
          $(".display").text(`$${body.conversion_rates.USD}`);
          $(".multiply").text(`$${amount * body.conversion_rates.USD}`);
        } else if (currencyType === "EUR") {
          $(".display").text(`€${body.conversion_rates.EUR}`);
          $(".multiply").text(`€${amount * body.conversion_rates.EUR}`);
        } else if (currencyType === "JPY") {
          $(".display").text(`¥${body.conversion_rates.JPY}`);
          $(".multiply").text(`¥${amount * body.conversion_rates.JPY}`);
        } else if (currencyType === "CAD") {
          $(".display").text(`$${body.conversion_rates.CAD}`);
          $(".multiply").text(`$${amount * body.conversion_rates.CAD}`);
        } else if (currencyType === "MXN") {
          $(".display").text(`$${body.conversion_rates.MXN}`);
          $(".multiply").text(`$${amount * body.conversion_rates.MXN}`);
        } else if (currencyType === "CNY") {
          $(".display").text(`¥${body.conversion_rates.CNY}`);
          $(".multiply").text(`¥${amount * body.conversion_rates.CNY}`);
        } else {
          $(".display").text(
            "There was an error processing your request! 404 Not Found: Incorrect Currency"
          );
          $(".multiply").text("N/A");
        }
      },
      function (error) {
        $(".display").text(
          `There was an error processing your request! ${error}`
        );
        $(".multiply").text("N/A");
      }
    );
  });
  $("#conversion-calculator-toUSD").click(function () {
    let currencyType = $("#currency-type-toUSD").val();
    let amount = $("#amount-toUSD").val();
    let promise = ExchangeRateToUSD.getCurrencyToUSD(currencyType);
    promise.then(
      function (response) {
        const body = JSON.parse(response);
        if (currencyType === "USD") {
          $(".display-toUSD").text(`$${body.conversion_rates.USD}`);
          $(".multiply-toUSD").text(`$${amount * body.conversion_rates.USD}`);
        } else if (currencyType === "EUR") {
          $(".display-toUSD").text(`$${body.conversion_rates.USD}`);
          $(".multiply-toUSD").text(`$${amount * body.conversion_rates.USD}`);
        } else if (currencyType === "JPY") {
          $(".display-toUSD").text(`$${body.conversion_rates.USD}`);
          $(".multiply-toUSD").text(`$${amount * body.conversion_rates.USD}`);
        } else if (currencyType === "CAD") {
          $(".display-toUSD").text(`$${body.conversion_rates.USD}`);
          $(".multiply-toUSD").text(`$${amount * body.conversion_rates.USD}`);
        } else if (currencyType === "MXN") {
          $(".display-toUSD").text(`$${body.conversion_rates.USD}`);
          $(".multiply-toUSD").text(`$${amount * body.conversion_rates.USD}`);
        } else if (currencyType === "CNY") {
          $(".display-toUSD").text(`$${body.conversion_rates.USD}`);
          $(".multiply-toUSD").text(`$${amount * body.conversion_rates.USD}`);
        } else {
          $(".display-toUSD").text(
            "There was an error processing your request! 404 Not Found: Incorrect Currency"
          );
          $(".multiply-toUSD").text("N/A");
        }
      },
      function (error) {
        $(".display-toUSD").text(
          `There was an error processing your request! ${error}`
        );
        $(".multiply-toUSD").text("N/A");
      }
    );
  });
});
