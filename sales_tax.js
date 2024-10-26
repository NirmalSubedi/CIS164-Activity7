"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    // get user entries
    const subtotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    // data validation for entries
    if (subtotal > 0 && subtotal < 10000) {
        if (taxRate > 0 && taxRate < 12) {
            // calculate sales tax and total
            let salesTax = subtotal * (taxRate/100);
            let total = subtotal + salesTax;

            // display the results in text boxes
            $("#sales_tax").value = salesTax.toFixed(2);
            $("#total").value = total.toFixed(2);
            $("#subtotal").focus();
        } 
        else {
            alert("Tax Rate must be > 0 and < 12");
            $("#tax_rate").focus();
        }
    } 
    else {
        alert("Subtotal must be > 0 and < 10000");
        $("#subtotal").focus();
    }
};

// functions to clear textbox for entries
const clearSubtotalBox = () => $("#subtotal").value = "";
const clearTaxRateBox = () => $("#tax_rate").value = "";


document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", () => {
        clearSubtotalBox();
        clearTaxRateBox();
        $("#subtotal").focus();
    });
    $("#subtotal").addEventListener("click", clearSubtotalBox);
    $("#tax_rate").addEventListener("click", clearTaxRateBox);

    $("#subtotal").focus();
});