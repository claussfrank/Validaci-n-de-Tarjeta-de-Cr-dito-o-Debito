function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
//resolvemos pruebra 1
  if(typeof creditCardNumber === "undefined"){
           return "Ingresa un numero";
         }
//resolvemos pruebra 2
  if(typeof creditCardNumber != "number"){
            return "Error de dato";
        }
  var creditNumber = creditCardNumber.toString();
  var string=creditNumber.split("");
  var numerosPares=[];
  var numerosImpares=[];
  var numeroTotal=0;
  var numerosSumados=[];
  var numeroDos=[];
  //resolvemos pruebra 3
      if(creditNumber.length!=16){
            return "Faltan numeros";}
          string.map(function(numero,i)
        {
      if(i%2===0){
          return numerosPares.push(numero);
        }else {
          return numerosImpares.push(parseInt(numero));
        }
      });
      numerosSumados = numerosPares.map(function(numero){
        var numeroUno=numero*2;
        if(numeroUno>9){
                   return numeroUno-9
                 }else{
                   return numeroUno
                 }
                 });
       numeroDos = numerosSumados.map(function (numero,i){
                   return numero + numerosImpares[i];
                 });

       numeroTotal = numeroDos.reduce(function(valorAnterior, valorActual){
                 return valorAnterior + valorActual;
               });

           if(numeroTotal%10===0){
               return true;
           }else{
               return false;
           }
    }


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
