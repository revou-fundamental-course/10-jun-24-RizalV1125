// Variable untuk Button
var btnKonversi = document.getElementById('btnKonversi');
var btnReset    = document.getElementById('btnReset');
var btnReverse  = document.getElementById('btnReverse');

// Variable untuk Input
var inputCelcius    = document.getElementById('inputCelcius');
var inputFahrenheit = document.getElementById('inputFahrenheit');
var outputcarakalkulasi   = document.getElementById('outputcarakalkulasi');

// Persiapan untuk Click
btnKonversi.addEventListener('click', btnKonversiHandler);
btnReset.addEventListener('click', btnResetHandler);
btnReverse.addEventListener('click', btnReverseHandler);

// Ketika di Konversi
function btnKonversiHandler(){
    document.getElementById('PeringatanCelcius').style.display    = 'none';
    document.getElementById('PeringatanFahrenheit').style.display = 'none';
    if(!inputCelcius.value) document.getElementById('PeringatanCelcius').style.display = 'block';
    else{
        inputFahrenheit.value = (inputCelcius.value * 9/5)+32;
        outputcarakalkulasi.value =  inputCelcius.value+"° x (9/5) + 32 = "+inputFahrenheit.value+"°F";
    }
}

// Ketika di Reset
function btnResetHandler(){

    inputCelcius.value = null;
    inputFahrenheit.value = null;
    outputcarakalkulasi.value = null;

    document.getElementById('PeringatanCelcius').style.display    = 'none';
    document.getElementById('PeringatanFahrenheit').style.display = 'none';
}

// Ketika di Reverse
function btnReverseHandler(){
    document.getElementById('PeringatanCelcius').style.display    = 'none';
    document.getElementById('PeringatanFahrenheit').style.display = 'none';
    if(!inputFahrenheit.value) document.getElementById('PeringatanFahrenheit').style.display = 'block';
    else{
        inputCelcius.value = ((parseInt(inputFahrenheit.value)-32) * 5/9);
        outputcarakalkulasi.value =  "(5/9) x ( "+inputFahrenheit.value+"° - 32 ) = "+inputCelcius.value+"°F";
    }
}