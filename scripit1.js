// dia 1 

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm !== stringUm) {
  // document.getElementById("primeiraAfirmacao").innerHTML = 'palavras'
 
}
if (numeroTrinta === stringTrinta) {

} else {
 
}

if (numeroDez == stringDez) {
 
}




let textoPadrao1 = 'COMPARAR O numeroUm e a stringUm'
let textoPadrao2 = 'COMPARAR O numeroTrinta e a stringTrinta'
let textoPadrao3 = 'COMPARAR O numeroDez e a stringDez'

$(document).ready(function () {
  $('#correcao').mouseover(function () {
    $('#primeiraAfirmacao').text('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.')
    $("#primeiraAfirmacao").show();

    $('#correcao').text('numeroUm !== stringUm');

    
  })
  $('#correcao').mouseout(function () {
    $("#primeiraAfirmacao").hide();
    $('#correcao').text(textoPadrao1);
  })

  $('#correcao2').mouseover(function () {
    
    $('#segundaAfirmacao').text('As variáveis numeroTrinta e stringTrinta aaanão tem o mesmo tipo')
    $("#segundaAfirmacao").show();
    $('#correcao2').text('numeroTrinta === stringTrinta');
  })
  $('#correcao2').mouseout(function () {
    $("#segundaAfirmacao").hide();
    $('#correcao2').text(textoPadrao2);
  })

  $('#correcao3').mouseover(function () {
     $('#terceiraAfirmacao').text('As variáveis numeroDez e stringDez tem o mesmo valor(' + numeroDez + ' / ' + stringDez + '), mas tipos diferentes(' + typeof (stringDez) + ' / ' + typeof (numeroDez) + ').')
    $("#terceiraAfirmacao").show();
    $('#correcao3').text('numeroDez !== stringDez');

  })
  $('#correcao3').mouseout(function () {
    $("#terceiraAfirmacao").hide();
    $('#correcao3').text(textoPadrao3);
  })
})





//dia 2 
$(document).ready(function () {
  $('#salvar').click(function () {
    console.log('JqueryFuncionando')

  })


})



















