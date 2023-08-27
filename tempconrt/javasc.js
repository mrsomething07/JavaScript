document.addEventListener('DOMContentLoaded', function () {
    let celsiusInput = document.querySelector('#celsius > input');
    let fahrenheitInput = document.querySelector('#fahrenheit > input');
    let kelvinInput = document.querySelector('#kelvin > input');
    let clearButton = document.getElementById('clear-button');

    function roundNumber(number) {
        return Math.round(number * 100) / 100;
    }

    celsiusInput.addEventListener('input', function () {
        let cTemp = parseFloat(celsiusInput.value);
        let fTemp = (cTemp * 9 / 5) + 32;
        let kTemp = cTemp + 273.15;
        fahrenheitInput.value = roundNumber(fTemp);
        kelvinInput.value = roundNumber(kTemp);
    });

    // ... (Rest of the JavaScript remains unchanged) ...
});
