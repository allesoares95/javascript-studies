/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var test = [ {curso: 'javascript'}, 'alexandre', 5, true, function(){} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retorne(arr){
  return arr;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retorne(test[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnValue(arrValue, result){
  return arrValue[result];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var forValue = [ 'Soares', 28, true, { a: 10 }, ['Curso JavaScript', 'Ninja'] ];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnValue(forValue, 0));
console.log(returnValue(forValue, 1));
console.log(returnValue(forValue, 2));
console.log(returnValue(forValue, 3));
console.log(returnValue(forValue, 4));
console.log(returnValue(forValue, 5));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( params ){
  var books = {
    'Os Segredos da Mente Milionária': {
      quantidadePaginas: 169,
      autor: 'T. Harv Eker',
      editora: 'Sextante'
    },
    'Mais Esperto que o Diabo': {
      quantidadePaginas: 210,
      autor: 'Napoleon Hill',
      editora: 'Citadel'
    },
    'O Homem Mais Rico da Babilônia': {
      quantidadePaginas: 117,
      autor: 'George Samuel',
      editora: 'Harper Collins'
    }
  };

  // if(!params){
  //   return books;
  // }

  // return books [ params ];   // refazendo o código abaixo

  return !params ? books : books [ params ];
};


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
// */
var bookName = 'Mais Esperto que o Diabo' ;

console.log(
  `O livro ${bookName} tem ${book(bookName).quantidadePaginas} paginas`
);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(
  `O livro ${bookName} foi publicado pela editora ${book(bookName).editora}`
);
