// 1) Declarar uma variavel para armazenar os dados dos livros
// 2) Declarar uma variavel com o endpoint (url/endereço da api)
// 3) Chamar a função que faz a requisição e traz os dados da api
// 4) Criar uma função assincrona
// 5) Ao chamar essa função sua resposta deve esperar a requisição ao endpoint
// 6) A resposta deve esperar montar o json e ao final atribuir a livros
// 7) Iteramos o array de livros com um método especial por ser muito menos verboso e manter mais organização no código. Esse metodo realiza a mesma função pra cada item do array


//4
async function getBuscarLivrosApi() {
    //5
    const resposta = await fetch (endPointApi);
    //6
    livros = await resposta.json();
    //7
    livros.forEach (livro => {
        console.log(livro)
    });
}


//1
let livros = [];
//2
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
//3
getBuscarLivrosApi();