"use strict";
window.onload = function () {
    const htmlInputForm = document.getElementById("inputForm");
    if (htmlInputForm != null) {
        htmlInputForm.addEventListener("input", calculate, false);
    }
};
function calculate() {
    const htmlEkPreis = document.getElementById("ekpreis");
    let ekpreis;
    let vkmenge;
    let vkpreis;
    if (htmlEkPreis != null) {
        ekpreis = Number(htmlEkPreis.value);
    }
    else {
        return;
    }
    const htmlEkPreisRange = document.getElementById("ekpreis_range");
    if (htmlEkPreisRange != null) {
        htmlEkPreisRange.innerHTML = ekpreis + " €";
    }
    const htmlVkMenge = document.getElementById("vkmenge");
    if (htmlVkMenge != null) {
        vkmenge = Number(htmlVkMenge.value);
    }
    else {
        return;
    }
    const htmlVkRange = document.getElementById("vk_range");
    if (htmlVkRange != null) {
        htmlVkRange.innerHTML = vkmenge + " g";
    }
    const htmlVkPreis = document.getElementById("vkpreis");
    if (htmlVkPreis != null) {
        vkpreis = Number(htmlVkPreis.value);
    }
    else {
        console.error(`htmlVkPreis is null`);
        return;
    }
    const htmlVkPreisRange = document.getElementById("vkpreis_range");
    if (htmlVkPreisRange != null) {
        htmlVkPreisRange.innerHTML = vkpreis + " €";
    }
    let result = (vkpreis - ekpreis) * vkmenge;
    let resultString = result.toFixed(2);
    const htmlProfit = document.getElementById("profit");
    if (htmlProfit != null) {
        if (result >= 0) {
            htmlProfit.innerHTML = `<h2 style="color:green"> ${resultString}€ profit</h2>`;
        }
        else {
            htmlProfit.innerHTML = `<h2 style="color:red"> ${resultString}€ loss</h2>`;
        }
    }
    let umsatz = vkpreis * vkmenge;
    let umsatzString = umsatz.toFixed(2);
    const htmlVkUmsatz = document.getElementById("vkumsatz");
    if (htmlVkUmsatz != null) {
        htmlVkUmsatz.value = umsatzString;
    }
    const htmlVk_Umsatz = document.getElementById("vk_umsatz");
    if (htmlVk_Umsatz != null) {
        htmlVk_Umsatz.innerHTML = umsatzString + " €";
    }
    console.log("Profit: ", result);
}
