//Esta linha seleciona o elemento HTML com o ID 'calculate' e adicione um ouvinte de evento de clique (click).
document.getElementById('calculate').addEventListener('click', function(){

    //Esta linhe obtém o valor digitado do HTML com o ID 'value' e armazena na variavel 'valuie'.
    const value = document.getElementById('value').value;

    //Esta linha obtém o valor digitado no elemento HTML com ID 'fee' e o divide por 100 para obter uma taxa em decimal.
    //O resultado é armazenado na variavel 'fee'
    const fee = (document.getElementById('fee').value) / 100;

    //Esta linha obtém o valor digitado no elemento HTML com o ID 'time' e armazena na variavel 'time'.
    const time = document.getElementById('time').value;

    //Esta linha calcula o total com base nos valores obtidos anteriormente. O calculo é realizado usando a 
    //fórmula de juros compostos.
    const total = value * (1 + fee)**time;

    // Esta linha atualiza o conteúdo do elemento HTML com o ID 'total' para mostrar o resultado formatado
    //como uma string no formato "R$ X,XX".
    document.getElementById('total').innerHTML = ("R$" + total.toFixed(2).replace('.',','));
});