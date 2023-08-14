// 19) Declaro uma variavel para atribuir todos os botões de class .btn
// 20) inButtons é um objeto que reúne todos os botões e por isso pode ser iterado através do método especial .forEach. Caso haja um click em qualquer dos botões é chamada a função filtrarLivros.
// 21) Declarada a função filtrar livros
// 22) Declarada a variavel para identificar e armazenar o botao com seu id
// 23) Declarada a variavel para identificar e armazenar o valor de value do elemento em questão
// 24) Declarada a variavel pra armazenar o filtro de livros de acordo com a categoria 
// 25) Exibir no console os dados em formato de tabela

// 19
const inButtons = document.querySelectorAll(".btn");

// 20
inButtons.forEach(button => button.addEventListener("click", filtrarLivros));

// 21
function filtrarLivros(){
    // 22
    const elementoBtn = document.getElementById(this.id);
    // 23
    const categoria = elementoBtn.value;
    // 24
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    // 25
    console.table(livrosFiltrados);
}