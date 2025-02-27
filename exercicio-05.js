var precoFixoCombustivel = 5.50;
var distanciaPercorrida = 145;
var consumoCarro = 10;
var calculoCustoCombustivel = 0;

console.log("O custo do combústivel nessa viagem foi de:" , custoCombustivel(precoFixoCombustivel, distanciaPercorrida) , "reais!");

function custoCombustivel(precoFixoCombustivel, distanciaPercorrida)
{
    custoCombustivel = distanciaPercorrida / consumoCarro
    calculoCustoCombustivel = custoCombustivel * precoFixoCombustivel
    return calculoCustoCombustivel
}