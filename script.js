
// dia 1 

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm !== stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor(' + numeroUm + '/' + stringUm + '), mas tipos diferentes( ' + typeof (stringUm) + ' / ' + typeof (numeroUm) + ').')
  document.getElementById("primeiraAfirmacao").innerHTML = 'As variáveis numeroUm e stringUm tem o mesmo valor(' + numeroUm + ' / ' + stringUm + '), mas tipos diferentes(' + typeof (stringUm) + ' / ' + typeof (numeroUm) + ').'
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo ' + typeof (numeroTrinta) + ' / ' + typeof (stringTrinta))
  document.getElementById("segundaAfirmacao").innerHTML = 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo (' + typeof (numeroTrinta) + ' / ' + typeof (stringTrinta) + ')'
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor(' + numeroDez + '/' + stringDez + '), mas tipos diferentes(' + typeof (stringDez) + ' / ' + typeof (numeroDez) + ').')
  document.getElementById("terceiraAfirmacao").innerHTML = 'As variáveis numeroDez e stringDez tem o mesmo valor(' + numeroDez + ' / ' + stringDez + '), mas tipos diferentes(' + typeof (stringDez) + ' / ' + typeof (numeroDez) + ').'
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}


function revelarResposta(resp) {
  switch (resp) {
    case 1:
      document.getElementById("correcao").innerHTML = 'numeroUm !== stringUm'
      primeiraAfirmacao.style.display = "block"
      break

    case 2:
      document.getElementById("correcao2").innerHTML = 'numeroTrinta === stringTrinta'
      segundaAfirmacao.style.display = "block"
      break

    case 3:
      document.getElementById("correcao3").innerHTML = 'numeroDez == stringDez'
      terceiraAfirmacao.style.display = "block"
      break

  }

}

function ocultarResposta(resp) {
  switch (resp) {
    case 1: document.getElementById("correcao").innerHTML = 'COMPARAR O numeroUm e a stringUm'
      primeiraAfirmacao.style.display = "none";
      break

    case 2: document.getElementById("correcao2").innerHTML = 'COMPARAR O numeroTrinta e a stringTrinta'
      segundaAfirmacao.style.display = "none";
      break


    case 3: document.getElementById("correcao3").innerHTML = 'COMPARAR O numeroDez e a stringDez'
      terceiraAfirmacao.style.display = "none";
      break

  }
}

$(document).ready(function () {
  $('correcao').mouseover(function () {
    $('primeiraAfirmacao').hide();
  })
  $('correcao').mouseout(function () {
    $('primeiraAfirmacao').show();
  })
})             




















// Dia 2

let nome, idade, curso, areaescolhida, linguagem

function armazenarValores() {
  nome = document.getElementById("nome").value
  idade = document.getElementById("idade").value
  curso = document.getElementById("LP").value
  console.log(nome + ' ' + idade + ' ' + curso)
  document.getElementById("frase").innerHTML = '"Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + curso + '!"'
  alert('"Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + curso + '!"')

}

//dia 3


function selecionarFront() {
  opcaoBack.style.display = 'none'
  opcaoFront.style.display = 'block'
  areaescolhida = 'Front-End'
}

function selecionarBack() {
  opcaoFront.style.display = 'none'
  opcaoBack.style.display = 'block'
  areaescolhida = 'Back-End'
}

function especializacao(esc) {
  if (esc == 1) {
    alert('Voce escolheu se especializar em ' + areaescolhida + ', Parabéns!')
  } else if (esc == 2) {
    alert('Voce escolheu se tornar programador Fullstack, Parabéns!')
  }

}

function adicionarTecnologia() {
  linguagem = String(window.prompt("Insira a tecnologia que deseja aprender", "")).toLowerCase();

  return linguagem

}
/*
 document.getElementById("aprender").onclick = function (e) {
  e.preventDefault();
  alert("Linguagem escolhida: " + adicionarTecnologia());

  if (linguagem === "java") {
    alert('Java - \n Muito usado em back-end, aplicativos Android e sistemas corporativos.')
  } else if (linguagem === "javascript") {
    alert('JavaScript - \n Essencial para desenvolvimento web, tanto no front-end quanto no back-end (Node.js).')
  } else if (linguagem === "python") {
    alert('Python - \n Versátil, usado em automação, ciência de dados, inteligência artificial e desenvolvimento web.')
  } else if (linguagem === "c#") {
    alert('C# - \n Popular em desenvolvimento de softwares corporativos e jogos com Unity.')
  } else if (linguagem === "sql") {
    alert('SQL - \n Linguagem para gerenciamento e manipulação de bancos de dados.')
  } else if (linguagem === "php") {
    alert('PHP - \n Amplamente utilizado no desenvolvimento web, especialmente em back-end de sites.')
  }

  console.log(linguagem)
}
*/
 // document.getElementById('chute').addEventListener('click', chutar);


let numeroOculto = gerarAleatorio()
let tentativas = 0

function gerarAleatorio() {
  return Math.floor(Math.random() * (10 - 1 + 1) + 1)
}

function chutar() {

  let escolhido = document.getElementById('tentativa').value
  tentativas++

  document.getElementById("chute").value = "Tentativas restantes: " + (3 - tentativas);


  if (numeroOculto == escolhido) {
    recomecar = prompt(`Parabéns, você acertou na ${tentativas} chance! \n Deseja Recomeçar? 1 - SIM / 2 - NÃO`)
    if (recomecar == 1) {
      reniciarJogo()
    } else {
      alert("Fim de jogo!")
      document.getElementById('chute').disabled = true;
    } return;
  }
  if (tentativas < 3) {
    alert(`Você errou, ainda tem ${3 - tentativas} tentativa(s)!`);
  } else {
    let recomecar = prompt(`Chances esgotadas! \nO número secreto era: ${numeroOculto} \nDeseja recomeçar? 1 - SIM / 2 - NÃO`);
    if (recomecar == "1") {
      reiniciarJogo();
    } else {
      alert("Fim de jogo!");
      document.getElementById('chute').disabled = true;
    }
  }
}

function reiniciarJogo() {
  tentativas = 0;
  numeroOculto = gerarAleatorio();
  document.getElementById('chute').disabled = false;
  document.getElementById("chute").value = "Chutar";
}


//dia 5
let Categorias = ["frutas", "laticinios", "congelados", "doces", "limpeza", "pets", "outros"]
let itensAdicionados = []

let frutas = []
let laticinios = []
let congelados = []
let doces = []
let limpeza = []
let pets = []
let outros = []

let produto

var lista = document.getElementById("listaItens").innerHTML

function adicionarItem() {
  var produtoAdd = prompt("Adicionar item a lista")

  var categoria = prompt("adicionar " + produtoAdd + " na categoria:")
  itensAdicionados.unshift(produtoAdd)
  produto = produtoAdd

  if (Categorias.includes(categoria)) {
    console.log("categoria existente")

    if (categoria == "frutas") {
      adicionarFruta(produtoAdd)
    } else if (categoria == "laticinios") {
      adicionarLaticinios(produtoAdd)

    } else if (categoria == "congelados") {
      adicionarCongelados(produtoAdd)
    } else if (categoria == "doces") {
      adicionarDoces(produtoAdd)
    } else if (categoria == "limpeza") {
      adicionarLimpeza(produtoAdd)
    } else if (categoria == "pets") {
      adicionarPets(produtoAdd)
    }
    alterarLista()
  } else {
    adicionarOutros(produtoAdd)
    alterarLista()
  }
}


function adicionarFruta(frt) {
  frutas.unshift(frt)
  var text = frt
  var li = document.createElement("dd");
  var t = document.createTextNode(text);
  li.appendChild(t);
  document.getElementById("categoriaFrutas").appendChild(li);
}

function adicionarLaticinios(ltc) {
  laticinios.unshift(ltc)
  var text = ltc
  var li = document.createElement("dd");
  var t = document.createTextNode(text);
  li.appendChild(t);
  document.getElementById("categoriaLaticinios").appendChild(li);
}

function adicionarCongelados(item) {
  congelados.unshift(item)
  var text = item
  var li = document.createElement("dd");
  var t = document.createTextNode(text);
  li.appendChild(t);
  document.getElementById("categoriaCongelados").appendChild(li);
}

function adicionarDoces(item) {
  doces.unshift(item)
  var text = item
  var li = document.createElement("dd");
  var t = document.createTextNode(text);
  li.appendChild(t);
  document.getElementById("categoriaDoces").appendChild(li);
}

function adicionarLimpeza(item) {
  limpeza.unshift(item)
  var text = item
  var li = document.createElement("dd");
  var t = document.createTextNode(text);
  li.appendChild(t);
  document.getElementById("categoriaLimpeza").appendChild(li);
}

function adicionarPets(item) {
  pets.unshift(item)
  var text = item
  var li = document.createElement("dd");
  var t = document.createTextNode(text);
  li.appendChild(t);
  document.getElementById("categoriaPets").appendChild(li);
}
function adicionarOutros(item) {
  outros.unshift(item)
  var text = item
  var li = document.createElement("dd");
  var t = document.createTextNode(text);
  li.appendChild(t);
  document.getElementById("categoriaOutros").appendChild(li);
}

function mostrarLista() {
  listaItens.style.display = 'block'


}

function mostrarTexto() {
  var textF = frutas
  var textL = laticinios
  var textC = congelados
  var textD = doces
  var textLim = limpeza
  var textPets = pets
  var textO = outros

  var paragrF = document.createElement("p"); // cria elemento
  var paragrL = document.createElement("p");
  var paragrC = document.createElement("p");
  var paragrD = document.createElement("p");
  var paragrLimpeza = document.createElement("p");
  var paragrPets = document.createElement("p");
  var paragrO = document.createElement("p");

  var F = document.createTextNode("Frutas: " + textF); // cria o nó de texto no <elemnto>
  var L = document.createTextNode("Laticinios: " + textL);
  var C = document.createTextNode("Congelados: " + textC);
  var D = document.createTextNode("Doces: " + textD);
  var Limp = document.createTextNode("Limpeza: " + textLim);
  var Pets = document.createTextNode("Pets: " + textPets);
  var O = document.createTextNode("Outros: " + textO);

  paragrF.appendChild(F); // adiciona o texto no <elemento> 
  paragrL.appendChild(L);
  paragrC.appendChild(C);
  paragrD.appendChild(D);
  paragrLimpeza.appendChild(Limp);
  paragrPets.appendChild(Pets);
  paragrO.appendChild(O);

  document.getElementById("listaTexto").appendChild(paragrF);
  document.getElementById("listaTexto").appendChild(paragrL);
  document.getElementById("listaTexto").appendChild(paragrC);
  document.getElementById("listaTexto").appendChild(paragrD);
  document.getElementById("listaTexto").appendChild(paragrLimpeza);
  document.getElementById("listaTexto").appendChild(paragrPets);
  document.getElementById("listaTexto").appendChild(paragrO);

}



function alterarLista() {

  resp = prompt("Deseja adicionar algum item a lista?")
  if (resp == "sim" || resp == "s") {
    adicionarItem()
  } else if (resp == "nao" || resp == "n") {
    // mostrarLista()
    mostrarTexto()
  }
  else if (resp == "excluir" || resp == "e") {
    mostrarTextoExc()
  }

}

function prencherLista() {
  if (frutas.length == 0) {
    frutas.unshift("Abacate", "Banana", "Mamão")
    itensAdicionados.unshift("Abacate", "Banana", "Mamão")
  }
  if (laticinios.length == 0) {

    laticinios.unshift("Requeijão", "Leite", "Leite Fermentado")
    itensAdicionados.unshift("Requeijão", "Leite", "Leite Fermentado")
  }
  if (congelados.length == 0) {
    congelados.unshift("Batata", "Ervilha")
    itensAdicionados.unshift("Batata", "Ervilha")
  }
  if (doces.length == 0) {
    doces.unshift("Chocolate", "Paçoca")
    itensAdicionados.unshift("Chocolate", "Paçoca")
  }
  if (limpeza.length == 0) {
    limpeza.unshift("Sabão em pó", "Detergente")
    itensAdicionados.unshift("Sabão em pó", "Detergente")
  }
  if (pets.length == 0) {
    pets.unshift("Ração Gato", "Areia Gato")
    itensAdicionados.unshift("Ração Gato", "Areia Gato")
  }
  if (outros.length == 0) {
    outros.unshift("Ayr Fryer", "Panela")
    itensAdicionados.unshift("Ayr Fryer", "Panela")
  }
  mostrarTextoExc()
}



function mostrarTextoExc() {
  listaTextoExc.innerHTML = ' '
  var textF = frutas
  var textL = laticinios
  var textC = congelados
  var textD = doces
  var textLim = limpeza
  var textPets = pets
  var textO = outros

  var paragrF = document.createElement("p"); // cria elemento
  var paragrL = document.createElement("p");
  var paragrC = document.createElement("p");
  var paragrD = document.createElement("p");
  var paragrLimpeza = document.createElement("p");
  var paragrPets = document.createElement("p");
  var paragrO = document.createElement("p");

  var F = document.createTextNode("Frutas: " + textF); // cria o nó de texto no <elemnto>
  var L = document.createTextNode("Laticinios: " + textL);
  var C = document.createTextNode("Congelados: " + textC);
  var D = document.createTextNode("Doces: " + textD);
  var Limp = document.createTextNode("Limpeza: " + textLim);
  var Pets = document.createTextNode("Pets: " + textPets);
  var O = document.createTextNode("Outros: " + textO);

  paragrF.appendChild(F); // adiciona o texto no <elemento> 
  paragrL.appendChild(L);
  paragrC.appendChild(C);
  paragrD.appendChild(D);
  paragrLimpeza.appendChild(Limp);
  paragrPets.appendChild(Pets);
  paragrO.appendChild(O);

  document.getElementById("listaTextoExc").appendChild(paragrF);
  document.getElementById("listaTextoExc").appendChild(paragrL);
  document.getElementById("listaTextoExc").appendChild(paragrC);
  document.getElementById("listaTextoExc").appendChild(paragrD);
  document.getElementById("listaTextoExc").appendChild(paragrLimpeza);
  document.getElementById("listaTextoExc").appendChild(paragrPets);
  document.getElementById("listaTextoExc").appendChild(paragrO);

}

function excluirItem() {
  var itemExc = prompt("Qual item deseja excluir?")
  if (itensAdicionados.includes(itemExc)) {
    console.log("excluir: " + itemExc)
    excluirItemCategoria(itemExc)
  } else {
    alert("Item nao encontrado")
  }
}

function excluirItemCategoria(item) {

  if (frutas.includes(item)) {
    var indexF = frutas.indexOf(item)
    frutas.splice(indexF, 1)
  } else if (laticinios.includes(item)) {
    var indexL = laticinios.indexOf(item)
    laticinios.splice(indexL, 1)
  } else if (congelados.includes(item)) {
    var indexC = congelados.indexOf(item)
    congelados.splice(indexC, 1)
  } else if (doces.includes(item)) {
    var indexD = doces.indexOf(item)
    doces.splice(indexD, 1)
  } else if (limpeza.includes(item)) {
    var indexLimp = limpezaindexOf(item)
    limpeza.splice(indexLimp, 1)
  } else if (pets.includes(item)) {
    var indexPets = pets.indexOf(item)
    pets.splice(indexPets, 1)
  } else if (outros.includes(item)) {
    var indexO = outros.indexOf(item)
    outros.splice(indexO, 1)
  }
  alert("Item excluido")
  mostrarTextoExc()


}

function armazenarValoresEXC() {
  nome = document.getElementById("nome").value
  idade = document.getElementById("idade").value
  curso = document.getElementById("LP").value
  console.log(nome + ' ' + idade + ' ' + curso)
  document.getElementById("frase").innerHTML = '"Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + curso + '!"'
  alert('"Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + curso + '!"')

}

//dia 7



let operacaoEscolhida
let op

var selecionado = document.getElementById("opMat");
selecionado.onchange = function (e) {
  e.preventDefault();
  op = this.value
  console.log(op)
  if(op==1){
    document.getElementById("operacaoSelecionada").innerHTML = " + "  
  }else if(op==2){
document.getElementById("operacaoSelecionada").innerHTML = " - "
  }else if(op==3){
    document.getElementById("operacaoSelecionada").innerHTML = " * "
  }else if(op==4){
document.getElementById("operacaoSelecionada").innerHTML = " / "
  }


}

function calcular(){
  var vlr1 = Number(document.getElementById("valor1").value)
  var vlr2 = Number(document.getElementById("valor2").value)
  console.log(vlr1,vlr2)

if(op == 1){
   document.getElementById("resultado").innerHTML = somar(vlr1,vlr2)
}else if(op == 2){
  document.getElementById("resultado").innerHTML = subtrair(vlr1,vlr2)
}else if(op == 3){
  document.getElementById("resultado").innerHTML = multiplicar(vlr1,vlr2)
} else if(op == 4){
  document.getElementById("resultado").innerHTML = dividir(vlr1,vlr2)
}

}



function somar(valor1,valor2){
  var result = valor1 + valor2;
  return result
}
function subtrair(valor1,valor2){
  var result = valor1 - valor2;
  return result
}
function multiplicar(valor1,valor2){
  var result = valor1 * valor2;
  return result
}
function dividir(valor1,valor2){
  var result = valor1 / valor2;
  return result
}