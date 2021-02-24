function calcular(){
    var nomePessoa = document.getElementById('name').value
    var pesoPessoa = document.getElementById('peso').valueAsNumber
    var alturaPessoa = document.getElementById('altura').valueAsNumber

    var imc = (pesoPessoa / alturaPessoa**2).toFixed(2);

    console.log(imc) 

    var escrever = document.getElementById('resultado')
    escrever.textContent = imc
}