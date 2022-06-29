var apples = 20;
var oranges = 30;


console.log('apples and oranges are equal', apples == oranges);
console.log('apples and oranges are not equal',apples != oranges);
console.log('apples are less than oranges:',apples < oranges);
console.log('apples are less than or equal to oranges:',apples <= oranges);
console.log('apples are greater than oranges:',apples > oranges);

var mangoes = 5;
var mangoapple = mangoes * apples;
console.log('multiple apple and mangoes',mangoapple);//5*20 is 100

var orangemango= oranges + mangoes;
console.log('mango addition with oranges is ', orangemango);//30+5 is 35

console.log('check which value is higher after combining',mangoapple > orangemango);

var mangoapplesub = apples - mangoes;
var orangemangodiv = oranges / mangoes;
console.log('subtracting mangoes from apples is',mangoapplesub,'divding mangoes from oranges is ',orangemangodiv, ' check if subtrated value is greater than divided value',mangoapplesub > orangemangodiv);


var applemangodiv = apples / mangoes;

console.log('check if the remainder of dividing mangoes from apples and oranges,if still apples are more in quantity:',applemangodiv > orangemangodiv);

console.log('check if all fruits are same in quantity', apples == mangoes == oranges);


var mangoappleplus = apples + mangoes;
var orangemangominus = oranges - mangoes;
console.log('Check whether mangoes added to apples is greater than oranges minus mangoes',mangoappleplus > orangemangominus );


console.log('apples  plus  mangoes more than oranges  divide by mangoes',mangoappleplus > orangemangodiv);
