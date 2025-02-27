var prato1 = 10.00;
var prato2 = 20.00;
var prato3 = 30.00;
var prato4 = 40.00;
var prato5 = 50.00;
var somaValores = 0;

console.log("O valor total desse conta é de" , valorTotal(prato1, prato2, prato3, prato4, prato5, somaValores) , "reais!")

function valorTotal(prato1, prato2, prato3, prato4, prato5, somaValores)
{
  somaValores = prato1 + prato2 + prato3 + prato4 + prato5
  valorTotal = somaValores * 0.10
  return valorTotal
}