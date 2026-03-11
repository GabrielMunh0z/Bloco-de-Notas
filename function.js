function abrirCliqq() {
  const filial = document.getElementById('inputFilial').value;
  
  if (filial) {
    // Substitua a URL abaixo pela URL real do seu sistema
    const urlBase = "https://cliqq.suaempresa.com.br/loja=";
    window.open(urlBase + filial, '_blank');
  } else {
    alert("Por favor, digite o número da filial!");
  }
}


const url = `http://qql${loja}00.qq:9000/cliqq/api/cache/clearAll`;
fetch(url)