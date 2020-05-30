function formatamoeda(numero){
  return numero.toFixed(2).replace(".",",")
}


function calcular(){
  distanciakm=inputDistancia.value
  tempomin=inputTempo.value
  valor = 2 + km * 1.4 + min * 0.26
  botaoCalcular.innerHTML = 'Total: R$'+valordacorrida.formatamoeda(valordacorrida)
}

//no lugar do prompt colocar o input
// value: retorna o que foi digitado
// replace: substituir
// ao inves de usar o toFixed e replace, usar uma função(formatamoeda)