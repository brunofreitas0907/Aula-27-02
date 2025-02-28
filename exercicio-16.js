var quantidadePessoasTurma = 50;

console.log("Serão necessários" , pacotesNecessarios(quantidadePessoasTurma) , "pacotes de pipoca para essa turma!");

function pacotesNecessarios(quantidadePessoasTurma)
{
    pacotesNecessarios = quantidadePessoasTurma / 4
    return pacotesNecessarios.toFixed(2)
}