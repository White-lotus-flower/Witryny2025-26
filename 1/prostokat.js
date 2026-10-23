document.getElementById('przycisk').addEventListener('click', function() {
    let szerokosc = document.getElementById('szerokosc').value;
    let wysokosc = document.getElementById('wysokosc').value;
    let kolor = document.getElementById('kolor').value;

    let prostokat = document.getElementById('prostokat');
    let wynikObwod = document.getElementById('wynikObwod');
    let wynikPole = document.getElementById('wynikPole');

    prostokat.style.width = szerokosc + 'cm';
    prostokat.style.height = wysokosc + 'cm';
    prostokat.style.backgroundColor = kolor;

    let obwod = 2 * Number(szerokosc) + 2 * Number(wysokosc);
    let pole = szerokosc * wysokosc;

    wynikObwod.textContent = "Obwód prostokąta jest równy " + obwod + " cm";
    wynikPole.textContent = "Pole prostokąta jest równe " + pole + " cm²";
});
