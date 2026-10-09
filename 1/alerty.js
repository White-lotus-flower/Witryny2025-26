const przycisk = document.getElementById('klik');
przycisk.addEventListener('click', function() {
    alert('Możesz być z siebie dumny');
      });

const przycisk1 = document.getElementById('klik1');
przycisk1.addEventListener('click', function() {
    let konfirm = confirm('CZy jesteś pewien, że chcesz kontynuować?');
      if(konfirm){
        alert('No to kontynuuj...');
      }else{
        alert('Przykro mi, że nie chcesz kontynuować...');
      }
});
const przycisk2 = document.getElementById('klik2');
przycisk1.addEventListener('click', function() {
    let konfirm1 = confirm('CZy jesteś pewien, że chcesz kontynuować?');
      if(konfirm1){
        alert('No to kontynuuj...');
      }else{
        alert('Przykro mi, że nie chcesz kontynuować...');
      }
});

