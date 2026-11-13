document.addEventListener("DOMContentLoaded", function () {
    const przycisk = document.getElementById("generuj");
    const inputWiersze = document.getElementById("wiersze");
    const inputKolumny = document.getElementById("kolumny");
    const tabela = document.getElementById("tabela");

    function walidujZakres(event) {
        const pole = event.target;
        const wartosc = Number(pole.value);
        if (pole.value !== "" && (wartosc < 0 || wartosc > 500)) {
            pole.value = "";
        }
    }

    inputWiersze.addEventListener("blur", walidujZakres);
    inputKolumny.addEventListener("blur", walidujZakres);

    przycisk.addEventListener("click", function () {
        const liczbaWierszy = parseInt(inputWiersze.value, 10);
        const liczbaKolumn = parseInt(inputKolumny.value, 10);

        tabela.innerHTML = "";

        if (isNaN(liczbaWierszy) || isNaN(liczbaKolumn) || 
            liczbaWierszy < 0 || liczbaWierszy > 500 || 
            liczbaKolumn < 0 || liczbaKolumn > 500) {
            return;
        }

        for (let w = 1; w <= liczbaWierszy; w++) {
            const tr = document.createElement("tr");

            for (let k = 1; k <= liczbaKolumn; k++) {
                const td = document.createElement("td");
                td.textContent = `${w}|${k}`;
                tr.appendChild(td);
            }

            tabela.appendChild(tr);
        }
    });
});
