const fr = document.querySelector('#formularz');
for (let i = 1; i <= 100; i++){
    const iput = document.createElement('input');
    iput.setAttribute('id', 'input' + i);
    iput.setAttribute('name', 'nazwa' + i);
    iput.setAttribute('style', 'margin: 10px; box-shadow: 5px 5px 0px lightblue');
    iput.setAttribute('placeholder', 'Element numer ' + i);
    fr.appendChild(iput);
    console.log('Liczba ' + i);
    if(i%5 == 0){
        const b = document.createElement('br');
        fr.appendChild(b);
    }
}