var assinaturaMensal = 50.99;

console.log ("O valor da assinatura anual desse serviço será de" , assinaturaAnual(assinaturaMensal) , "reais!");

function assinaturaAnual (assinaturaMensal)
{
    assinaturaAnual = assinaturaMensal * 12
    return assinaturaAnual.toFixed(2)
}