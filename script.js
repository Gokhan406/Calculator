var sayı1 = "";
var sayı2 = "";
var yenisayı = true;
var sayıislem;
var sonuc;

function sayıAl(sayı){
    if(yenisayı == true){
        sayı1 = sayı1 + sayı;
        document.querySelector(".calculator-input").value = sayı1;
    }
    else if(yenisayı == false){
        sayı2 = sayı2 + sayı;
        document.querySelector(".calculator-input").value = sayı2;
    }
}

function islem(yapilacak_islem) {
    yenisayı = false;
    sayıislem = yapilacak_islem
}

function Hesapla() {
    var parsedsayı1 = parseInt(sayı1);
    var parsedsayı2 = parseInt(sayı2);
    switch (sayıislem) {
        case "+":
            sonuc = parsedsayı1 + parsedsayı2;
            break;

        case "-":
            sonuc = parsedsayı1 - parsedsayı2;
            break;

        case "*":
            sonuc = parsedsayı1 * parsedsayı2;
            break;
            
        case "/":
            sonuc = parsedsayı1 / parsedsayı2;
            break;
    }

    document.querySelector(".calculator-input").value = sonuc
    sayı1 = `${sonuc}`
    sayı2 = ""
    yenisayı = true
}

function Temizle() {
    sayı1 = "";
    sayı2 = "";
    yenisayı = false;
    document.querySelector(".calculator-input").value = ""
}