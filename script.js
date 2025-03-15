let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm !== stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor(' + numeroUm +'/'+ stringUm + '), mas tipos diferentes( ' + typeof(stringUm) +'/' + typeof(numeroUm) + ').') 
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo '+ typeof(numeroTrinta)+' / '+typeof(stringTrinta))
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor(' + numeroDez +'/'+ stringDez + '), mas tipos diferentes( ' + typeof(stringDez) +'/' + typeof(numeroDez) + ').') 
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
