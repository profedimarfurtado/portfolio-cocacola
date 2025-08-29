/*window.onload = function () {
  alert("Bem-vindo ao site da Coca-Cola!");
};*/

// Exemplo de função adicional:
function mostrarCuriosidade() {
  const curiosidades = [
    "A Coca-Cola foi criada em 1886.",
    "Já foi vendida como remédio.",
    "A fórmula original tinha cocaína.",
    "É a bebida mais distribuída no mundo.",
    "A marca é reconhecida por 94% da população mundial."
  ];

  const random = Math.floor(Math.random() * curiosidades.length);
  alert(curiosidades[random]);
}