// tres maneiras de instanciar uma variável no

var nome = "Maria"; // global
console.log(nome);

var nome = 'Joao';

// usa a palavra chave 'var' para instanciar uma variavel não é muito recomendado,
// apesar dde possível, pois ela é instanciada globalmente, ou seja, todo oo meu código
// além do seu valor pdoer ser alterado



// ela vai existir onde vvc instanciar
function printPhone(){
    // ela vai existir onde vc instanciar dentro de um escopo
    let  telefone = '24877467501';
    telefone = '0000000000'
    console.log(telefone);
}
console.log(telefone); // erro de console pois a variaveel não existe, ela não foi definida

printPhone();// chamada da função 



function printIdade(){
    const idade = '18'
   //  idade = '20'; // erro pois não pode mudar uma variavel declarada como const
    console.log(idade);
}
printIdade();

//tipo de dados

//string
let nome = 'joão';

//number
let idade = '23';

//boolean
let estaCalor = true

//undefined
let variavelIndefinida;