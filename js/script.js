var celula, contador = 0, total = 0;
var button = "<a id='btndel' onclick='subtrair(this.parentNode.parentNode.cells[0].textContent);delLinha(this.parentNode.parentNode.rowIndex);'><img src='../img/btndel.png'></a>";
function inserir() {
    var dados = recebeValores();
    dados[2] = formatarData(dados[2]);
    inserirLinha(dados[0], dados[1], dados[2]);
    var total = somaTotal(dados[0]);
    mostrarTotal(total);
}
function mostrarTotal(total) {
    total = total;
    document.getElementById('resultado').innerHTML = "Você já fez " + total + " horas de exercícios";
}
function inserirLinha(hora, modalidade, data) {
    var tabela = document.getElementById("tabela");
    linha = tabela.insertRow(2);
    celula = linha.insertCell(0);
    celula.innerHTML = hora + " H";
    celula = linha.insertCell(1);
    celula.innerHTML = modalidade;
    celula = linha.insertCell(2);
    celula.innerHTML = data;
    celula = linha.insertCell(3);
    celula.innerHTML = button;
}
function somaTotal(valor) {
    valor = parseInt(valor, 10);
    contador += valor;
    return contador;
}
function delLinha(i) {
    tabela.deleteRow(i);
}
function formatarData(i) {
    var res = i.split("-");
    var novadata = res[2] + "/" + res[1] + "/" + res[0];
    return novadata;
}
function recebeValores() {
    var hora = document.getElementById("horas").value;
    var modalidade = document.getElementById("modalidade").value;
    var dataString = document.getElementById("data").value;
    var dados = [ hora,  modalidade, dataString ];
    return dados;
}
function subtrair(i) {
    menos = i.split("H");
    menos = parseInt(menos, 10);
    contador = contador - menos;
    mostrarTotal(contador);
}