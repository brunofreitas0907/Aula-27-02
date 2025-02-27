var valorCompra = 50.00;
var valorPago = 70.00;

console.log("O troco deverá ser de" , calcularTroco(valorCompra, valorPago) , "reais!");

function calcularTroco(valorCompra, valorPago)
{
    var calcularTroco = valorPago - valorCompra
    return calcularTroco
}