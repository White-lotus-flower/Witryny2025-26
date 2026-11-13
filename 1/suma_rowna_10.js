const fidel = document.querySelector('fieldset');
for (let i = 100; i <= 999; i++){
    const nr = document.createElement('span');
    nr.textContent = i;
    fidel.appendChild(nr);
        const b = document.createElement('span');
        b.textContent = ' , ';
        fidel.appendChild(b);
        if(i == 999){
            b.textContent = '.';
        }
}
    let l = null;
    let setki = null;
    let dziesiatki = null;
    let jednosci = null;
    let suma = 0;
    let ile = 0;

    for(let a = 100; a < 1000; a ++){
        setki = Math.floor(a/100);
        dziesiatki = Math.floor((a%100)/10);
        jednosci = Math.floor(i%10);
        suma = setki + dziesiatki + jednosci;
    }