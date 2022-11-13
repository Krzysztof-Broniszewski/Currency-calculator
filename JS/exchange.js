{
    let actualRateElement = document.querySelector(".js-form__value");
    let resultElement = document.querySelector(".js-form__result");
    let amountElement = document.querySelector(".js-form__amount");
    let warningElement = document.querySelector(".js-form__warning");

    const currencyElement = document.querySelector(".js-form__currency");
    const EUR = 4.7146;
    const USD = 4.7328;
    const GBP = 5.3795;

    fetch("http://api.nbp.pl/?format=json")
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });

    currencyElement.addEventListener("input", () => {

        let amount = amountElement.value
        const currencyValue = () => {
            switch (currencyElement.value) {
                case "EUR":
                    result = EUR * amount;
                    actualRate = EUR;
                    warningElement.innerText = "";
                    break;
                case "USD":
                    result = USD * amount;
                    actualRate = USD;
                    warningElement.innerText = "";
                    break;
                case "GBP":
                    result = GBP * amount;
                    actualRate = GBP;
                    warningElement.innerText = "";
                    break;
                case "Select currency":
                    warningElement.innerText = "You must select a currency";
            };
        };

        currencyValue();

        actualRateElement.value = actualRate.toFixed(2);
        resultElement.innerText = result.toFixed(2);
    });

    const displayDate = (Date) => {
        const todayElement = document.querySelector(".js-form__date");
        const data = new Date();
        todayElement.innerText = data.toUTCString();
    }

    const init = () => {
        displayDate(Date);
    }

    init()
}




