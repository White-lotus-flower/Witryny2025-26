document.addEventListener("kontent", function () {
    const przycisk = document.getElementById("generuj");
    const inputWiersze = document.getElementById("wiersze");
    const inputKolumny = document.getElementById("kolumny");
    const tabela = document.getElementById("tabela");

    function Zakres(event) {
        const pole = event.target;
        const wartosc = Number(pole.value);
        if (pole.value !== "" && (wartosc < 0 || wartosc > 500)) {
            pole.value = "";
        }
    }

    inputWiersze.addEventListener("blur", Zakres);
    inputKolumny.addEventListener("blur", Zakres);

    przycisk.addEventListener("click", function () {
        const lWierszy = parseInt(inputWiersze.value, 10);
        const lKolumn = parseInt(inputKolumny.value, 10);

        tabela.innerHTML = "";

        for (let w = 1; w <= lWierszy; w++) {
            const tr = document.createElement("tr");

            for (let k = 1; k <= lKolumn; k++) {
                const td = document.createElement("td");
                td.textContent = `${w}|${k}`;
                tr.appendChild(td);
            }

            tabela.appendChild(tr);
        }
    });
});
