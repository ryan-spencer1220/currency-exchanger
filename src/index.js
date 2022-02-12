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
          $(".display").text(`You must enter an actual form of currency!`);
          $(".multiply").text(`N/A`);
        }
      },
      function (error) {
        $(".display").prepend(
          `There was an error processing your request: ${error}`
        );
      }
    );
  });
});
