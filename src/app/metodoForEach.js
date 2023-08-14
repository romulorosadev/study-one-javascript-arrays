// Para uma melhor organização e manutenção do código
// 8) Trazemos a const com o elemento que recebe os livros
// 9) Trazemos a função pra exibir os livros passando por parametro uma lista de livros
// 10) O array passado por parâmetro é iterado usando o método forReach, assim realiza a mesma função do primeiro ao último item dessa lista/array
// 11) A cada iteração, é adicionado um elemento HTML
// 12) O elemeto HTML é um template string que traz os atributos de cada item iterado dessa lista/array
// 26) Toda vez que essa função for chamada ela primeiro limpa o elemento que armazena os livros a serem exibidos e só depois itera o array com os livros


//8
const outLivros = document.getElementById("livros");

//9
function exibirLivros(livrosLista){

    //26 
    outLivros.innerHTML = ''
    
    //10
    livrosLista.forEach (livrosItem => {
        //11
        outLivros.innerHTML += 
        //12
        `<div class="livro">
            <img class="livro__imagens" src=${livrosItem.imagem} alt=${livrosItem.alt} />
            <h2 class="livro__titulo">
                ${livrosItem.titulo}
            </h2>
            <p class="livro__descricao">${livrosItem.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livrosItem.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livrosItem.categoria}</span>
            </div>
        </div>`;        
    });    
}