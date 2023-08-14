// 1) Declarar uma variavel para armazenar os dados dos livros
// 2) Declarar uma variavel com o endpoint (url/endereço da api)
// 3) Chamar a função que faz a requisição e traz os dados da api
// 4) Criar uma função assincrona
// 5) Ao chamar essa função sua resposta deve esperar a requisição ao endpoint
// 6) A resposta deve esperar montar o json e ao final atribuir a livros
// 8, 9, 10, 11 e 12) ForEach - código referente foi transferido pra um arquivo especifico
// 13) Chamar uma função pra que aplica os descontos nos livros, que retorna um objeto que é atribuído a livrosComDesconto
// 14, 15, 16, 17 e 18) Map - código referente foi escrito num arquivo especifico
// 7) A função exibirLivros passa a receber como param livrosComDesconto
// 19 a 25 Método Filter
// 19) Declarar uma variavel para atribuir todos os botões de class .btn
// 20) inButtons é um objeto que reúne todos os botões e por isso pode ser iterado através do método especial .forEach. Caso haja um click em qualquer dos botões é chamada a função filtrarLivros.
// 21) Declarar a função filtrar livros
// 22) Declarar a variavel para identificar e armazenar o botao com seu id
// 23) Declarar a variavel para identificar e armazenar o valor de value do elemento em questão
// 24) Declarar a variavel pra armazenar o filtro de livros de acordo com a categoria 
// 25) Exibir no console os dados do filtro referente em formato de tabela


//4
async function getBuscarLivrosApi() {
    //5
    const resposta = await fetch (endPointApi);
    //6
    livros = await resposta.json();
    //13
    let livrosComDesconto = aplicarDesconto(livros);
    //7    
    exibirLivros(livrosComDesconto);    
}

//1
let livros = [];
//2
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
//3
getBuscarLivrosApi();