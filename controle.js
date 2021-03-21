
let bostao_atualizar = document.getElementById ("btn_atualizar");
bostao_atualizar.addEventListener ('click' , function(event) {

        // capturei a tabela existente

let tabela = document.querySelectorAll ('.estilo-tabela tr');

var soma = 0;

tabela.forEach (valor =>) {
    var linha = valor.childNode; 
    var preco = linha[7].innerText;

}
    if (preco != "Preço Unitário") {
        preco = parseFloat (preco.replace (',', ',', ));
        soma = soma + preco;


    }

document.getElementById ("vr_total").innerText = soma.total

}