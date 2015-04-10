var total = 0;
var celula;
var button = "<a id='btndel' onclick='delLinha(this.parentNode.parentNode.rowIndex)'><img src='../img/btndel.png'></a>";

function inserir() {
    var hora = document.getElementById("horas").value;
    var modalidade = document.getElementById("modalidade").value;
    var dataString = document.getElementById("data").value;
    var res = dataString.split("-");
    var novadata = res[2] + "/" + res[1] + "/" + res[0];
    var tabela = document.getElementById("tabela");

    linha = tabela.insertRow(2);
    celula = linha.insertCell(0);
    celula.innerHTML = hora + " H";
    celula = linha.insertCell(1);
    celula.innerHTML = modalidade;
    celula = linha.insertCell(2);
    celula.innerHTML = novadata;
    celula = linha.insertCell(3);
    celula.innerHTML = button;
    
    var soma = parseInt(hora,36);
    somaTotal(soma);
    document.getElementById('resultado').innerHTML = "Você já fez " + total + " horas de exercícios";
}

function somaTotal(valor) {
    total += valor;
}

function delLinha(i) {
    tabela.deleteRow(i);
}