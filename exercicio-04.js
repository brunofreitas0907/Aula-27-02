var estoqueProduto = 10;
var pedidoDeProduto = 5;

console.log(verificarEstoque(estoqueProduto, pedidoDeProduto));

function verificarEstoque(estoqueProduto, pedidoDeProduto)
{ 
    if (pedidoDeProduto > estoqueProduto) {
        console.log("Não há estoque suficiente!")
    } else{
        console.log("Sim, há estoque suficiente!")
    }
}