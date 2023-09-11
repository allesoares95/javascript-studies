function myFunc(x) {
  switch(x) {
    case 1:
      console.log('x é 1');
      break;
    case 2:
      console.log('x é 2');
      // sempre utilize o break no final
    default:
      console.log('x não é nem 1 nem 2');
  }
};

console.log(myFunc());
console.log(myFunc(1));
console.log(myFunc(2));