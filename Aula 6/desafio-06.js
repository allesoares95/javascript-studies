/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Paulista';

console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Santos FC', 'São Paulo', 'Palmeiras', 'Corinthians', 'Ponte Preta'];
console.log( `Times que estão participando do campeonato: ${teams}` );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

function showTeamPosition(position){
  if(position < 1 || position > 5){
    return "Não temos a informação do time que está nessa posição.";
  }
  return `O time que está em ${position}º lugar é o ${teams[position - 1]}.`
}


/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(3));
console.log(showTeamPosition(2));
console.log(showTeamPosition(6));
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numb = 20;

while(numb <= 31){
  console.log(numb);    // podendo utilizar dentro do console numb++
  numb++;
};

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

        // Professor na revisão;

function convertToHex(color){
  var hexa;
  switch(color) {
    case "purple":
      hexa = '#230230'
      break;
    case "black":
      hexa = '#010101'
      break;
    case "white":
      hexa = '#f1f1f1'
      break;
    case "pink":
      hexa = '#f1f4'
      break;
    case "gray":
        hexa = '#5675'
        break;
   default:
      return `Não temos o equivalente hexadecimal para ${color}.`
  }
  return `O hexadecimal para a cor ${color} é ${hexa}`;
};


        // Aluno
// function convertToHex(color){
//   switch(color) {
//     case "purple":
//       console.log(`O hexadecimal para a cor ${color} é #230230`);
//       break;
//     case "black":
//       console.log(`O hexadecimal para a cor ${color} é #010101`);
//       break;
//     case "white":
//       console.log(`O hexadecimal para a cor ${color} é #f1f1f1 `)
//       break;
//     case "pink":
//       console.log(`O hexadecimal para a cor ${color} é #f1f4 `)
//       break;
//     case "gray":
//         console.log(`O hexadecimal para a cor ${color} é #5675 `)
//         break;
//    default:
//       console.log(`Não temos o equivalente hexadecimal para ${color}.`)
//   }
// };

// podendo utilizar tmbm return dentro do switch caso utilize o return não precisa utilizar break;

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

console.log(convertToHex("red"));
console.log(convertToHex("blue"));
console.log(convertToHex("gray"));
console.log(convertToHex("blue"));
console.log(convertToHex("black"));
console.log(convertToHex("white"));
console.log(convertToHex("pink"));
console.log(convertToHex("purple"));
