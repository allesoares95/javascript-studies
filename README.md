# Curso de JavaScript !!!

## Aula 1

* Variáveis e tipos de dados;

  Declarando variavel: var nome
    var x = undefined

    declarando variavel com valor:
    x = 0

    alterando o valor da variavel:
    x = 1

    outros valores para variavel:
    var nomequalquer = 1.2 (numero decimais)

  Tipos de dados:
    Number, string, boolean, null, undefined;
    var nome = 1.2 (number)
    var nome = 'hello world' (string)
    var nome = true (boolean true ou false)
    var nome = null (representa um valor quando não tem nem um valor)
    var nome = undefined (quando a variavel não existe)

    Object {} e array []

    Object{}
      var pessoa = {
        nome: Alexandre,
        idade: 28,
        altura: 1.70
      }

      > pessoa.altura
      1.70
      > pessoa.nome
      Alexandre

      alterando nome da variavel object:
      pessoa.nome = Soares
      
      > pessoa
      {nome: Soares, idade: 28, altura: 1.70}

      Pode acessar o object com aspas simples ' ' ou aspas duplas " "
      pessoa["altura"] 
        1.70
      pessoa['altura']
        1.70


    Array[]
      var numeros = [1, 2, 3, 4, 5, 6]

      > numeros
      [
        1,
        2,
        3,
        4,
        5,
        6
      ]

      > numeros[0]
      1

      > numeros[5]
      6
      
      Sempre iniciando o array pelo indice 0

* Operadores aritméticos ;
  + Adição, - Subtração, * Multiplicação e / Divisão
    1 + 2 = 3 (adição)
    10 - 3 = 7  (subtração)
    3 * 3 = 9 (multiplicação)
    10 / 2 = 5  (divisão)

  Operadores aritméticos abreviados;
  ++ e --
    var soma = 10 + 10
    > soma
    20

    > soma = soma + 1
    21

    > soma++
    22

    incrementando o valor de + 1 utilizando ++
    > ++soma
    23

    > soma = soma - 1
    22

    > soma--
    21

    > --soma
    20

  Operadores aritméticos abreviados;
  +=, -=, *= e /= 
    > soma
    20

    > soma += 20
    40

    > soma -= 20
    20

    > soma *= 2
    40

    > soma /= 2
    20

* Operadores de igualdade e relacionais;
  
  Operadores de igualdade
  == igual a, != diferente de

      > var x = 0
      undefined

      > x
      0

      > x == 0
      true

      > 1 == 1
      true

      > 1 == 2
      false

      > 1 != 2
      true

      > 2 != 2
      false

    === igual a, e do mesmo tipo
    !== diferentre, mas do mesmo tipo

      'fernando' == 'fernando'

      > var nome = 'fernando'
      > nome
      'fernando'

      > nome == 'fernando'
      true

      > var pessoa = 'maria'
      > pessoa
      'maria'

      > nome == pessoa
      false

      > nome
      'fernando'

      >pessoa
      'maria'

        > var um = '1'
        > um
        '1' (string)

        > var numum = 1
        > numum
        1 (number)

        > um == numum
        true
        
        (JavaScript converte a o segundo parametro pelo primeiro mostrando o resultado de true)

      verificando se é do mesmo tipo ===
        > 1 === '1'
        false

      verificando se é diferente do mesmo tipo !==
        > 1 !== 1 
        true

  Operadores relacionais
  > maior que
  < menor que
  >= maior ou igual a
  <= menor ou igual a

    1 > 2 (maior)
    false

    1 < 2 (menor)
    true

    2 >= 2 (maior ou igual a)
    true
    2 >= 3 
    false

    5 <= 3 (menor ou igual a)
    false
    3 <= 5 
    true 

* Funções
  São blocos de código JavaScript nomeados, e que podem ser invocados usando o operador()

    > function nomequalquer() {}
    undefined

    > nomequalquer()
    undefined

      > var x = 1;
      // utilizar ; para finalizar uma instrução

      > function soma() {
        x = x + 1;
      }

      > x
      1

      > soma()
      undefined

      > x 
      2

      > soma()
      undefined

      > x 
      3

      // funções são blocos de codigo que podem ser reutilizaveis como o exemplo a cima, utilizando a função para acrescenter a variavel o valor de + 1 sempre que a função é chamada

      // sempre invocar a função com ()

  Funções criam escopo
    var x = 5

    function qualquer() {
      var fernando = 'fernando';
    }

    > fernando 
    ReferenceError: fernando is not defined (erro, fernando não esta definido)

    > qualquer()

    > fernando 
    ReferenceError: fernando is not defined (erro, fernando não esta definido)

  Funções podem retornar valores
    acessar o valor do fernando

      > function qualquer2() {
        var fernando = 'fernando';
        return fernando;
      }

      > fernando
      ReferenceError: fernando is not defined (erro, fernando não esta definido)

      > qualquer2()
      'fernando'

    exemplo 2
      > var y = 4;

      > function cinco() {
        return 5;
      }

      > cinco()
      5

      > y
      4

      > y + cinco()
      9

  Funções podem receber argumentos (ou parâmetros)
    > function soma(x, y) {
      return x + y;
    }

    > soma()
    NaN (Não é um numero)

    > soma(1, 2)
    3

