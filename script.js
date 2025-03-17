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

let nome , idade , curso

function armazenarValores(){
 nome = document.getElementById("nome").value
 idade = document.getElementById("idade").value
 curso = document.getElementById("LP").value
 console.log( nome +' '+ idade+ ' ' + curso)
 document.getElementById("frase").innerHTML ='"Olá '+ nome +', você tem '+idade+' anos e já está aprendendo '+ curso + '!"'
 alert('"Olá '+ nome +', você tem '+idade+' anos e já está aprendendo '+ curso + '!"')

}