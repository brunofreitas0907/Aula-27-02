var tamanhoPacoteAlimentos = 1500;

console.log ("Essa pessoa poderá fazer" , quantidadeRefeicoes (tamanhoPacoteAlimentos) , "refeições com esse pacote de alimentos!");

function quantidadeRefeicoes (tamanhoPacoteAlimentos)
{
    quantidadeRefeicoes = tamanhoPacoteAlimentos / 250
    return quantidadeRefeicoes
}