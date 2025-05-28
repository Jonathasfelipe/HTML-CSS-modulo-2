const fontes = [
  'Arial, sans-serif',
  '"Courier New", monospace',
  '"Georgia", serif',
  '"Verdana", sans-serif',
  '"Times New Roman", serif',
  '"Trebuchet MS", sans-serif',
  '"Comic Sans MS", cursive',
  '"Lucida Console", monospace',
  '"Impact", sans-serif',
  '"Tahoma", sans-serif'
];

let indiceFonte = 0;

function alterarFonte() {
  const texto = document.getElementById('demo-text');
  texto.style.fontFamily = fontes[indiceFonte];
  indiceFonte = (indiceFonte + 1) % fontes.length;
}