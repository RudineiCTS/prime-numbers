const main = (params) => {
  const arrayPrime = []
  findPrimeNumber(arrayPrime)
  const sumsPrimeTotal = somar(arrayPrime);
  console.log(arrayPrime);
  console.log(sumsPrimeTotal)
  
}

function findPrimeNumber(arrayPrime){
  let qDivisores = 0;
 for (i = 1; i <= 1000; i++){
  qDivisores = 0;
     for(j = 1; j <= i; j++){
          if(checkDivisor(i, j)){
           qDivisores++;
          }
          
          
      }
      if(qDivisores == 2){
        arrayPrime.push(i)
      }
    
 }
}

function checkDivisor(num, divisor ){
  if( num % divisor == 0 ){
    return true
  } else{
    return false
  }
}
function somar(arrayPrime){
  const sumsPrime = arrayPrime.reduce((sumsPrime, Nextvalue)=>{
    return sumsPrime + Nextvalue
  })
  return sumsPrime;
}
main()