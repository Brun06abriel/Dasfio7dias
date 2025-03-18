let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm !== stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor(' + numeroUm +'/'+ stringUm + '), mas tipos diferentes( ' + typeof(stringUm) +' / ' + typeof(numeroUm) + ').') 
  document.getElementById("primeiraAfirmacao").innerHTML = 'As variáveis numeroUm e stringUm tem o mesmo valor('+ numeroUm +' / '+ stringUm + '), mas tipos diferentes(' + typeof(stringUm) +' / ' + typeof(numeroUm) + ').'
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo '+ typeof(numeroTrinta)+' / '+typeof(stringTrinta))
  document.getElementById("segundaAfirmacao").innerHTML ='As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo ('+ typeof(numeroTrinta)+' / '+typeof(stringTrinta)+')'
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor(' + numeroDez +'/'+ stringDez + '), mas tipos diferentes(' + typeof(stringDez) +' / ' + typeof(numeroDez) + ').') 
  document.getElementById("terceiraAfirmacao").innerHTML = 'As variáveis numeroDez e stringDez tem o mesmo valor('+ numeroDez +' / '+ stringDez + '), mas tipos diferentes(' + typeof(stringDez) +' / ' + typeof(numeroDez) + ').'
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

function revelarResposta(resp){
  switch(resp){
    case 1: 
    document.getElementById("correcao").innerHTML ='numeroUm !== stringUm'
    primeiraAfirmacao.style.display = "block"
    break

    case 2: 
    document.getElementById("correcao2").innerHTML ='numeroTrinta === stringTrinta'
    segundaAfirmacao.style.display = "block"
    break

    case 3: 
    document.getElementById("correcao3").innerHTML ='numeroDez == stringDez'
    terceiraAfirmacao.style.display = "block"
    break

  }

 }

  function ocultarResposta(resp){
      switch(resp){
      case 1: document.getElementById("correcao").innerHTML ='COMPARAR O numeroUm e a stringUm'
      primeiraAfirmacao.style.display = "none";
       break
       
       case 2: document.getElementById("correcao2").innerHTML ='COMPARAR O numeroTrinta e a stringTrinta'
       segundaAfirmacao.style.display = "none";
        break

       
       case 3: document.getElementById("correcao3").innerHTML ='COMPARAR O numeroDez e a stringDez'
       terceiraAfirmacao.style.display = "none";
        break

    }
    }

// Dia 2

let nome , idade , curso , areaescolhida, linguagem

function armazenarValores(){
 nome = document.getElementById("nome").value
 idade = document.getElementById("idade").value
 curso = document.getElementById("LP").value
 console.log( nome +' '+ idade+ ' ' + curso)
 document.getElementById("frase").innerHTML ='"Olá '+ nome +', você tem '+idade+' anos e já está aprendendo '+ curso + '!"'
 alert('"Olá '+ nome +', você tem '+idade+' anos e já está aprendendo '+ curso + '!"')

}

//dia 3


function selecionarFront(){
  opcaoBack.style.display='none'
  opcaoFront.style.display='block'
  areaescolhida = 'Front-End'
}

function selecionarBack(){
  opcaoFront.style.display='none'
  opcaoBack.style.display='block'
  areaescolhida = 'Back-End'
}

function especializacao(esc){
  if(esc == 1){
    alert('Voce escolheu se especializar em '+ areaescolhida +', Parabéns!')
  }else if(esc == 2){
    alert('Voce escolheu se tornar programador Fullstack, Parabéns!')
  }

}

function adicionarTecnologia(){
  linguagem = String(window.prompt("Insira a tecnologia que deseja aprender","")).toLowerCase();
  
  return linguagem
  
}

document.getElementById("aprender").onclick  = function (e){
  e.preventDefault();
 alert("Linguagem escolhida: " + adicionarTecnologia());

if(linguagem === "java"){
  alert('Java - \n Muito usado em back-end, aplicativos Android e sistemas corporativos.') 
}else if(linguagem === "javascript"){
  alert('JavaScript - \n Essencial para desenvolvimento web, tanto no front-end quanto no back-end (Node.js).') 
}else if(linguagem === "python"){
  alert('Python - \n Versátil, usado em automação, ciência de dados, inteligência artificial e desenvolvimento web.') 
}else if(linguagem === "c#"){
  alert('C# - \n Popular em desenvolvimento de softwares corporativos e jogos com Unity.') 
}else if(linguagem === "sql"){
  alert('SQL - \n Linguagem para gerenciamento e manipulação de bancos de dados.') 
}else if(linguagem === "php"){
  alert('PHP - \n Amplamente utilizado no desenvolvimento web, especialmente em back-end de sites.') 
}
 
console.log(linguagem)
} 



if(linguagem == "java"){
  alert('linguagem JAVA A melhor em para trabalhar com POO') 
}