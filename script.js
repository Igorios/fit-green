
function sortearNumeros() {

    let result = document.querySelector("#result");

    let elementos = [0, 1, 2, 3];

    let randomIndex = Math.floor(Math.random() * elementos.length);
    console.log(randomIndex)
    let randomValue = elementos[randomIndex];

    if (randomValue === 2) {
        //button.disabled = true;
        result.innerHTML = `Parabéns! você ganhou uma Mix de salada!`;
        alert("Parabéns você ganhou uma Mix de salada");
    } else {
        //button.disabled = true;
        result.innerHTML = `Poxa... não foi dessa vez, mas tente na próxima :(`;
    }
    

}

window.onload = function () {
    document.querySelector("#btn-sorter").addEventListener("click", sortearNumeros);
};