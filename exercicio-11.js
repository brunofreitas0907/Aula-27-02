var tamanhoParede = 145;

console.log("A quantidade de tinta necessária será de" , quantidadeTintaNecessaria(tamanhoParede) , "litros de tinta!")

function quantidadeTintaNecessaria(tamanhoParede)
{
    let quantidadeTintaNecessaria = tamanhoParede / 6
    return quantidadeTintaNecessaria.toFixed(2)
}