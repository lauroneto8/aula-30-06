let valorAtual = 0;

const spanValor = document.getElementById("valor")
const botãoAumentar = document.getElementById("aumentar")
const botãoDiminuir = document.getElementById("diminuir")
const botãoResetar = document.getElementById("resetar")

botãoAumentar.addEventListener("click", function() {
    valorAtual++;
    spanValor.textContent = valorAtual
});
botãoDiminuir.addEventListener("click", function() {
    valorAtual--;
    spanValor.textContent = valorAtual
});
botãoResetar.addEventListener("click", function() {
    ;
    spanValor.textContent = valorAtual
});