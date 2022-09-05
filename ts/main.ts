window.onload = function () {
    const htmlInputForm: HTMLElement | null = document.getElementById("inputForm")
    if (htmlInputForm != null){
        htmlInputForm.addEventListener("input", calculate, false);
    }
    
}

function calculate() {

    const htmlEkPreis: HTMLInputElement|null = document.getElementById("ekpreis") as HTMLInputElement

    let ekpreis: number
    let vkmenge: number;
    let vkpreis: number;

    if (htmlEkPreis != null){
        ekpreis = Number(htmlEkPreis.value);
    }else{
        return;
    }

    const htmlEkPreisRange: HTMLElement|null = document.getElementById("ekpreis_range")

    if (htmlEkPreisRange != null){
        htmlEkPreisRange.innerHTML = ekpreis + " €";
    }
    
    const htmlVkMenge: HTMLInputElement|null = document.getElementById("vkmenge") as HTMLInputElement;

    if (htmlVkMenge != null){
        vkmenge = Number(htmlVkMenge.value);    
    }else{
        return;
    }

    const htmlVkRange: HTMLElement|null = document.getElementById("vk_range");

    if(htmlVkRange != null){
        htmlVkRange.innerHTML = vkmenge + " g";
    }

    const htmlVkPreis: HTMLInputElement | null = document.getElementById("vkpreis") as HTMLInputElement;

    if (htmlVkPreis != null){
        vkpreis = Number(htmlVkPreis.value);
    }else{
        console.error(`htmlVkPreis is null`);
        return;
    }

    const htmlVkPreisRange: HTMLElement|null = document.getElementById("vkpreis_range");

    if (htmlVkPreisRange != null){
        htmlVkPreisRange.innerHTML = vkpreis + " €";
    }
    

    let result: number = (vkpreis - ekpreis) * vkmenge;
    let resultString: string = result.toFixed(2);


    const htmlProfit: HTMLElement|null = document.getElementById("profit");

    if (htmlProfit != null){
        if (result >= 0) {
            htmlProfit.innerHTML = `<h2 style="color:green"> ${resultString}€ profit</h2>`;
        } else {
            htmlProfit.innerHTML = `<h2 style="color:red"> ${resultString}€ loss</h2>`;
        }
    }

    let umsatz: number = vkpreis * vkmenge;
    let umsatzString: string = umsatz.toFixed(2);

    const htmlVkUmsatz: HTMLInputElement|null = document.getElementById("vkumsatz") as HTMLInputElement;

    if(htmlVkUmsatz != null){
        htmlVkUmsatz.value = umsatzString;
    }

    const htmlVk_Umsatz = document.getElementById("vk_umsatz");

    if (htmlVk_Umsatz != null){
        htmlVk_Umsatz.innerHTML = umsatzString + " €";
    }
    

    console.log("Profit: ", result)
}