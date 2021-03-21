let valor1 = document.getElementById ("titulo-pagina");

let conteudo = valor.innerText;

let conteudoComhtml = valor

console.log(valor1);

// ------------------------------

let valor1 = document.getElementById ("tabela-produto").children;
console.log ("Quantidade de Nodes: ", valor1.length);

console.log (valor [0]);
console.log (valor [1]);
console.log (valor [2]);
console.log (valor [3]);

for (let i = 0; i < valor1.length; i++){
    console.log (valor [1]);
}

//----------------------------------------
for (let conteudo of valor1) {
    console.log (cadaFilho)
}

//-------------------------------------------
Array.from (valor1).forEach(conteudo => {
    console.log(conteudo);

});

//---------------------------------------------

let valor1 = document.getElementById ("tabela-produto").childNodes;
console.log ("Quantidade de Nodes: ", valor1.length);

valor1.forEach(conteudo => {
    console.log(conteudo);

});



Array.from (valor1).forEach(conteudo => {
    let corpo = conteudo.parentElement;
    console.log (corpo);

});


let valor1 = document.getElementById ("tabela-produto").childNodes;
console.log ("Quantidade de Nodes: ", valor1.length);

Array.from (valor1).forEach(conteudo => {
    let identificador = conteudo.parentNode.id;
    console.log (identificador);
});


let valor1 = getElementByClassName ("tema-prod-conteudo")
console.log ("Quantidade de Notas: " , valor.length)


//let corpo = document.getElementById("principal").getAttribute("name");
//let corpo = document.getElementsByName()

let.valor1 = document.getElementsByTagName("P");
console.log ("Quantida de nodes: ", valor1.length);

let.valor1 = document.querySelector ("ID");

console.log (valor1);



// Adicionar um Parágrafo dinâmico 

// Primeiro: Criar o Node

let node = document.createElement ("P");
let valor = document.createTextNode 