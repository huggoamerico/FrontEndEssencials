const botao = document.getElementById('button');

const titulo = document.getElementById('title');

botao.addEventListener('click', ()=> {
    titulo.textContent = "JavaScript";
    titulo.style.color = "purple";
});
var nome = "maria"
console.log()
// DOM - arvore de elementos html que o navegador
// para "mapear" a tela
// o DOM funciona como uma ponte entre o código a página

// é atraves do DOM  que o JS interage com o html 
// - como ele fqaz isso ? pela palavra chave 'document'