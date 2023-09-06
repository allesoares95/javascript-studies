# Curso de JavaScript !!!

## Aula 1

* Variáveis e tipos de dados;

  Declarando variavel: var nome
    ```js
    var x = undefined

    // declarando variavel com valor:
    x = 0

    // alterando o valor da variavel:
    x = 1

    // outros valores para variavel:
    var nomequalquer = 1.2 (numero decimais)
    ```
    
  Tipos de dados:
    Number, string, boolean, null, undefined;
    ```js
    var nome = 1.2 // (number)
    var nome = 'hello world' // (string)
    var nome = true // (boolean true ou false)
    var nome = null // (representa um valor quando não tem nem um valor)
    var nome = undefined //(quando a variavel não existe)
    ```

    Object {} e array []
    ```js
    Object{}
      var pessoa = {
        nome: Alexandre,
        idade: 28,
        altura: 1.70
      }

      > pessoa.altura
      // 1.70
      > pessoa.nome
      // Alexandre

      // alterando nome da variavel object:
      pessoa.nome = Soares
      
      > pessoa
      {nome: Soares, idade: 28, altura: 1.70}
    ```

      Pode acessar o object com aspas simples ' ' ou aspas duplas " "
      ```js
      pessoa["altura"] 
      // 1.70
      pessoa['altura']
      // 1.70
      ```    

    Array[]
      ```js
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
      // 1

      > numeros[5]
      // 6
      ```
      
      Sempre iniciando o array pelo indice 0

* Operadores aritméticos ;
  + Adição, - Subtração, * Multiplicação e / Divisão
    1 + 2 = 3 (adição)
    10 - 3 = 7  (subtração)
    3 * 3 = 9 (multiplicação)
    10 / 2 = 5  (divisão)

  Operadores aritméticos abreviados;
  ++ e --
    ```js
    var soma = 10 + 10
    > soma
    //20

    > soma = soma + 1
    //21

    > soma++
    //22

    // incrementando o valor de + 1 utilizando ++
    > ++soma
    //23

    > soma = soma - 1
    //22

    > soma--
    //21

    > --soma
    //20
    ```
    

  Operadores aritméticos abreviados;
  +=, -=, *= e /= 

    ```js
    > soma
    // 20

    > soma += 20
    // 40

    > soma -= 20
    //20

    > soma *= 2
    //40

    > soma /= 2
    //20
    ```

* Operadores de igualdade e relacionais;
  
  Operadores de igualdade
  == igual a, != diferente de
    
    ```js
    > var x = 0
    // undefined

    > x
    // 0

    > x == 0
    // true

    > 1 == 1
    // true

    > 1 == 2
    // false

    > 1 != 2
    // true

    > 2 != 2
    // false
    ```
      
    === igual a, e do mesmo tipo
    !== diferentre, mas do mesmo tipo

      ```js
      // 'fernando' == 'fernando'

      > var nome = 'fernando'
      > nome
      // 'fernando'

      > nome == 'fernando'
      // true

      > var pessoa = 'maria'
      > pessoa
      // 'maria'

      > nome == pessoa
      // false

      > nome
      // 'fernando'

      > pessoa
      // 'maria'

        > var um = '1'
        > um
        // '1' (string)

        > var numum = 1
        > numum
        // 1 (number)

        > um == numum
        // true
        
        // (JavaScript converte a o segundo parametro pelo primeiro mostrando o resultado de true)
      ```

      verificando se é do mesmo tipo ===

        ```js
        > 1 === '1'
        // false

        // verificando se é diferente do mesmo tipo !==
        > 1 !== 1 
        // true
        ```
        

  Operadores relacionais
  > maior que
  < menor que
  >= maior ou igual a
  <= menor ou igual a

    ```js
    1 > 2 (maior)
    // false

    1 < 2 (menor)
    // true

    2 >= 2 (maior ou igual a)
    // true
    2 >= 3 
    // false

    5 <= 3 (menor ou igual a)
    // false
    3 <= 5 
    // true 
    ```

* Funções
  São blocos de código JavaScript nomeados, e que podem ser invocados usando o operador()

    ```js
    > function nomequalquer() {}
    // undefined

    > nomequalquer()
    // undefined

      > var x = 1;
      // utilizar ; para finalizar uma instrução

      > function soma() {
        x = x + 1;
      }

      > x
      // 1

      > soma()
      // undefined

      > x 
      // 2

      > soma()
      // undefined

      > x 
      // 3

      // funções são blocos de codigo que podem ser reutilizaveis como o exemplo a cima, utilizando a função para acrescenter a variavel o valor de + 1 sempre que a função é chamada

      // sempre invocar a função com ()
    ```
    
  Funções criam escopo

    ```js
    var x = 5

    function qualquer() {
      var fernando = 'fernando';
    }

    > fernando 
    // ReferenceError: fernando is not defined (erro, fernando não esta definido)

    > qualquer()

    > fernando 
    //ReferenceError: fernando is not defined (erro, fernando não esta definido)
    ```
    
  Funções podem retornar valores
    acessar o valor do fernando
      ```js
      > function qualquer2() {
        var fernando = 'fernando';
        return fernando;
      }

      > fernando
      // ReferenceError: fernando is not defined (erro, fernando não esta definido)

      > qualquer2()
      // 'fernando'
      ```
      
    exemplo 2
      ```js
      > var y = 4;

      > function cinco() {
        return 5;
      }

      > cinco()
      // 5

      > y
      // 4

      > y + cinco()
      // 9
      ```
      

  Funções podem receber argumentos (ou parâmetros)

    ```js
    > function soma(x, y) {
      return x + y;
    }

    > soma()
    // NaN (Não é um numero)

    > soma(1, 2)
    // 3
    ```
    
## Aula 2

* Operadores Lógicos 

  && (AND = retorna se todos operadores é verdadeiro)
    ```js
    var x = 3;
    var y = 7;

    x === 3 && y ===7
    // true

    x === 3 && y === 4
    // false
    ```
  
  || (OR = retorna se algum operador é verdadeiro) 
    ```js
    x === 3 || y === 3
    // true
    ```
    
  ! (NOT = diferente ou inverte o valor)
    ```js
    x === 3
    // true

    ! x === 3
    // false

    x !== '3'
    // true

    x != 3
    // false

    x !== 3
    // false

    x 
    // 3
    ```

* Operadores unários

  + e -
  Operador unários + (tenta converte o operador para numero)
    ```js
    > 3 + 3
    // 6

    > +3
    // 3

    > +'3'
    // 3

    > '3'
    // '3'

    > +'fernando'
    NaN

    > 'fer' + 'nando'
    // 'fernando'

    > '3' + 3
    // '33'

    > 3 + '3'
    // '33'
    ```
  
  Operador unarios - (tenta converte o operador para numero)
    ```js
    var x = 3;
    > - x
    // -3

    > x
    // 3

    > -'3'
    // -3
    ```

* Estrutura léxica

  Conjunto de regras que vai definir de que modo ou de que forma você irá escrever na linguagem.

  Case sensitive
    ```js
    var anima = 'cachorro';
    var Anima = 'macaco';

    > animal
    // 'cachorro'

    > Animal
    // 'macaco'

    > anima !== Animal
    // true

    // Isso significa que as variáveis animal e Animal são diferente;
    ```

  Comentários no javascript
    de linha  //
    de bloco /* */

  Identificadores
    Podem iniciar com:
      _ ou $
      letras de a a z
      letras de A a Z

    Podem conter:  
      _ ou $
      letras de a a z
      letras de A a Z
      digitos de 0 a 9
      Qualquer caractere UNICODE (mas não deve utilizar)

  Palavras reservadas do javascript:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#palavras-chave_reservadas_do_ecmascript_2015

* Instruções condicionais IF, ELSE e ELSE IF
  A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira.

  ```js
    var x = 3;
    var y = 7;
    
    if(x === 3){
      y = 3;
    }

    > y
    // 3
  ```

  exemplo 2
  ```js
    var x = 3;
    var y = 3;

    if(x === y && x === 3){
      x = 5;
      y = 2;
    }

    > x
    // 5
    > y
    // 2
  ```

  exemplo 3
  ```js
    var x = 5;
    var y = 2;

    if( x === 5 || y === 1){
      x = 1;
      y = 1;
    }

    > x
    // 1

    > y
    // 1
  ```

  condição else
  Se for falsa, executa as afirmações dentro de else

  ```js
    var x = 1;
    var y = 1;

    if(x === 2){
      y = 2;
    } else {
      y = 10;
    }

    > y
    // 10
  ```

  condição else if
  ```js
  var x = 1;
  var y = 10;

  if( x === 2){
    y = 2;
  } else if ( y === 3) {
    x = 3;
  } else if ( x === y) {
    x = 10;
    y = 100;
  } else {
    x = 0;
    y = 0;
  }

  > x
  // 0

  > y 
  // 0
  ```

## Aula 3

* TIPOS 
  - tipoas primitivos
    number, string, boolean, null e undefined

  - tipos objeto
    todos os outros

  Objeto é um conjunto de propriedades;

    ```js
      var pessoa =  { nome: 'Alexandre', idade: 28, peso: 82, altura: 1.69};
      pessoa.idade // 28
      pessoa 
      <!-- { 
        nome: 'Alexandre', 
        idade: 28, 
        peso: 82, 
        altura: 1.69
      } -->

      var carro = { cor: 'preto', motor: '2.0', portas: 4 }
      carro.cor // 'preto'

      var myvar = function() { return 'variavel myvar'; } // função anonima;
      myvar // [Function: myvar]
      myvar() // 'variavel myvar'
    ```
    
  Métodos - Funções como valor 

    ```js
      var pessoa = {nome: 'Alexandre', idade: 28, altura: 1.69, peso: 83};
      // undefined

      pessoa
      // { nome: 'Alexandre', idade: 28, altura: 1.69, peso: 83 }

      pessoa.sexo = 'masculino';
      // 'masculino'

      pessoa
      <!-- {
        nome: 'Alexandre',
        idade: 28,
        altura: 1.69,
        peso: 83,
        sexo: 'masculino'
      } -->

      pessoa.cor = 'moreno';
      // 'moreno'

       pessoa
      <!-- {
        nome: 'Alexandre',
        idade: 28,
        altura: 1.69,
        peso: 83,
        sexo: 'masculino',
        cor: 'moreno'
      } -->

      pessoa.andar = function(){ return 'Pessoa andando' };
      // [Function (anonymous)]

      pessoa
      <!-- {
        nome: 'Alexandre',
        idade: 28,
        altura: 1.69,
        peso: 83,
        sexo: 'masculino',
        cor: 'moreno',
        andar: [Function (anonymous)]
      } -->
      pessoa.andar()
      // 'Pessoa andando'
      
      pessoa.idade
      // 28
      
      pessoa.aniversario = function(){ pessoa.idade++ };
      // [Function (anonymous)]
      
      pessoa.idade
      // 28
      
      pessoa.aniversario();
      // undefined
      
      pessoa
      <!-- {
        nome: 'Alexandre',
        idade: 29,
        altura: 1.69,
        peso: 83,
        sexo: 'masculino',
        cor: 'moreno',
        andar: [Function (anonymous)],
        aniversario: [Function (anonymous)]
      } -->
      // idade alterada incrementando um valor +

      pessoa.sobrenome = 'Soares';
      // 'Soares'

      pessoa
      <!-- {
        nome: 'Alexandre',
        idade: 29,
        altura: 1.69,
        peso: 83,
        sexo: 'masculino',
        cor: 'moreno',
        andar: [Function (anonymous)],
        aniversario: [Function (anonymous)],
        sobrenome: 'Soares'
      } -->

      pessoa.nomeCompleto = function() { return pessoa.nome + ' ' + pessoa.sobrenome };
      // [Function (anonymous)]

      pessoa.nomeCompleto()
      // 'Alexandre Soares'
    ```

    ```js
      pessoa
      <!-- {
        nome: 'Alexandre',
        idade: 29,
        altura: 1.69,
        peso: 83,
        sexo: 'masculino',
        cor: 'moreno',
        andar: [Function (anonymous)],
        aniversario: [Function (anonymous)]
      } -->

      pessoa.nome // propriedade

      pessoa.andar() // um método

      // Quando você utiliza uma váriavel dentro de um objeto ele é utilizado como propriedade;
      // Quando você utilizar uma function dentro de um objeto ele é utilizado como método;

    ```

## Aula 4

* Truthy e Falsy 
  Truthy = todos valores booleanos que é representado por true
  Falsy = todos valores booleanos que é representado por false

  Falsy
    False, Undefined, null, NaN, 0, -0, "", ''

    if( '' ) { teste = true; } else { teste = false; }  // false
    if( false ) { teste = true; } else { teste = false; }  // false

  Truthy
    Todos os outros

  if( {} ) { teste = true; } else { teste = false; }  // true
  if( true ) { teste = true; } else { teste = false; }  // true
  

  Descobrir a representação booleana: !!
    !true // false
    !1    // false
    !! true   // true
    !!0   // false

    inverte 2x !

* Condicional ternário
  condição ? true : false; que substitui o if

  ```js
    1 === 2 ? true : false; // false
    1 === 1 ? true : false; // true
    if( 1 === 2) {
      true
    } else { 
      false
    }

    var sexo = 'o';
    if ( pessoa.sexo === 'Feminino') {
      sexo = 'a'
    }
    var sexo = pessoa.sexo === 'Feminino' ? 'a' : 'o';

    1 ? true ; false;
    var carro = 'string' : 'nome carro' : 'placa do carro';
    var moto = false ? 'nome moto' : 'moto não existe';
  ```

* Escopo de variáveis;
  Global e Local
  
  Function cria escopo local;

  Global
    ```js
      var myvar = 1;
      myvar // 1

      function myFunction(){
        return myvar;
      }
      myFunction();   // 1
    ```

  Local
  ```js
    function otherFunction(){
      var otherVar = true;
      return otherVar
    };

    otherfunction();    // true
    otherVar;    // otherVar is not defined 
  ```

  Importante sempre usar var para criação de variavel;

  ```js
    function newFunction(){
      newVar = 'variavel global';
      return newVar;
    };

    newVar;   // is not defined
    newFunction();  // 'variavel global'
    newVar;   // 'variavel global'
  ```

  ```js
    function outraFuncao(a, b, c){
      return a;
    };

    outraFuncao(1); // a
    outraFuncao(1, 2); // a
    a   // a is not defined
  ```

## Aula 5

* Funções

  Retorno de funções pode ter arrays [] e objetos {};

  ```js
    function test(){
      return {
        prop1: 1,
        prop2: 'alexandre',
        prop3: function(){
          return 'prop3';
        }
      };
    };

    test();   // { prop1: 1, prop2: 'alexandre', prop3: [Function: prop3] }

    var values = test();
    values          // { prop1: 1, prop2: 'alexandre', prop3: [Function: prop3] }
    values.prop2    // 'alexandre'
    values.prop3    // [Function: prop3]
    values.prop3();  // 'prop3'
  ```

* Parâmetros de funções;
  Arrays []

  ```js
  var arr = [1, 2, 3];

  function myFun(arg){
    return arg;
  };
  myFun();   //undefined
  myFun(arr);   // [ 1, 2, 3 ]


  function myFun2(arg){
    return arg[1];
  };
  myFun2(arr);    // 2

  myFunction2([1, 3, 5, 7, 9]);

  myFun(['Alexandre', 1, true, 28]);   
  ```

  Object {}

  ```js
    var obj = {
      objetivo: 'curso',
      aprendizado: 'JavaScript Ninja',
      ninja: true
    };

    obj   // { objetivo: 'curso', aprendizado: 'JavaScript Ninja', ninja: true }

    function testFunction(arg){
      return arg;
    };

    testFunction(1);    // 1

    testFunction(obj);    // { objetivo: 'curso', aprendizado: 'JavaScript Ninja', ninja: true }

    testFunction(obj).ninja   // true

    function testFunction2(arg){
      return arg.aprendizado;
    };

    testFunction2(obj);   //'JavaScript Ninja'
    obj.aprendizado   //'JavaScript Ninja'
  ```