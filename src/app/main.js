// 1) Declarar uma variavel para armazenar os dados dos livros
// 2) Declarar uma variavel com o endpoint (url/endereço da api)
// 3) Chamar a função que faz a requisição e traz os dados da api
// 4) Criar uma função assincrona
// 5) Ao chamar essa função sua resposta deve esperar a requisição ao endpoint
// 6) A resposta deve esperar montar o json e ao final atribuir a livros
// 7) Chamar a função pra exibir os livros
// 8) Declarar var para atribuir o elemento que receberá todos os livros
// 9)  Declarar a função pra exibir os livros passando por parametro uma lista de livros
// 10) O array passado por parâmetro é iterado usando o método forReach, assim realiza a mesma função do primeiro ao último item dessa lista/array
// 11) Para o momento exibimos os dados referente a cada item iterado


//9
function exibirLivros(livrosLista){
    //10
    livrosLista.forEach (livrosItem => {
        //11
        console.log(livrosItem)
    });    
}


//4
async function getBuscarLivrosApi() {
    //5
    const resposta = await fetch (endPointApi);
    //6
    livros = await resposta.json();
    //7    
    exibirLivros(livros);    
}


//1
let livros = [];
//2
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
//3
getBuscarLivrosApi();
//8
const outLivros = document.getElementById("livros");
