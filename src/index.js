import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ExchangeRate from "./js/currency.js";

function clearFields() {
  $(".display").text("");
  $(".amount").text("");
  $(".show-errors").text("");
}

function getElements(response) {
  if (response.conversion_rate) {
    let currentExchangeRate =
      Math.round((response.conversion_rate + Number.EPSILON) * 100) / 100;
    let amount = $("#amount").val();
    $(".display").text(`${currentExchangeRate}`);
    $(".multiply").text(`${currentExchangeRate * amount}`);
  } else {
    $(".display").text("Error");
    $(".multiply").text("N/A");
    $(".show-errors").text(
      `There was an error! Due to a ${response} error, your request could not be processed. Please review API key and selected currency!`
    );
  }
}

async function getExchangeRates(firstCurrency, secondCurrency) {
  const response = await ExchangeRate.getCurrency(
    firstCurrency,
    secondCurrency
  );
  getElements(response, firstCurrency, secondCurrency);
}

$(document).ready(function () {
  $("#conversion-calculator").click(function () {
    let userCurrencyOne = $("#currency-one").val();
    let userCurrencyTwo = $("#currency-two").val();
    clearFields();
    getExchangeRates(userCurrencyOne, userCurrencyTwo);
  });
});
