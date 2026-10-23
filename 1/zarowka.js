const img = document.getElementById('zarowkaoff');
const btnWlacz = document.getElementById('btn-wlacz');
const btnWylacz = document.getElementById('btn-wylacz');
const radioWlaczona = document.getElementById('wlaczona-radio');
const radioWylaczona = document.getElementById('wylaczona-radio');
const checkboxWylaczona = document.getElementById('wylaczona-checkbox');

function ustawStan(czyWlaczona) {
    if (czyWlaczona) {
        img.src = 'wlaczona.png';
        radioWlaczona.checked = true;
        checkboxWylaczona.checked = false;
    } else {
        img.src = 'wylaczona.png';
        radioWylaczona.checked = true;
        checkboxWylaczona.checked = true;
}}

btnWlacz.addEventListener('click', function() {
    ustawStan(true);
});

btnWylacz.addEventListener('click', function() {
    ustawStan(false);
});

radioWlaczona.addEventListener('change', function() {
    if (radioWlaczona.checked) ustawStan(true);
});

radioWylaczona.addEventListener('change', function() {
    if (radioWylaczona.checked) ustawStan(false);
});

checkboxWylaczona.addEventListener('change', function() {
    if (checkboxWylaczona.checked) {
        ustawStan(false);
    } else {
        ustawStan(true);
    }
});
