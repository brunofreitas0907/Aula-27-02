var premio = 500.000;
quantidadePessoas = 5;

console.log("Cada pessoa receberá o valor de" , valorPorPessoa(premio, quantidadePessoas),"mil reais!");

function valorPorPessoa(premio, quantidadePessoas)
{
    valorPorPessoa = premio / quantidadePessoas
    return valorPorPessoa
}