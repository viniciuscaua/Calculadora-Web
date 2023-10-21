const resultado = document.getElementById('resultado')

function inserir(numero){
    resultado.innerHTML += numero;
}

function limpar() {
    resultado.innerHTML = ' ';
}

function apagar() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}

function calcular() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML)
    }
}