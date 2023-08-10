// 14) Declaramos a função aplicar desconto 
// 15) Definir o valor do desconto
// 16) Iterar o array de livros com um metodo map e atribuir a var livrosComDesconto
// 17) Para cada iteração ele vai fazer uma copia de todos as propriedades de livro, mas vai alterar o valor da propriedade preco e retornar (exigência do map)
// 18) Retornar o resultado desse map

//14
function aplicarDesconto(livros){
    //15
    const desconto = 0.3;
    //16
    livrosComDesconto = livros.map (livro => {
        //17
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })

    //18
    return livrosComDesconto;
}