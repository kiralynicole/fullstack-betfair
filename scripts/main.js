// limbaj descriptive-limbaj interpretat nu compilat--imperative cum se intampla lucrurile
//html-css declarative
//limbaj paradigma, object oriented(not clasical)
//loosely typed
console.log('dasdas', 'dadsa',12);
var nume = 'Nicole';
console.log(nume);
//o variabila este o exopresie, asignarea este o expresie
//expresie=orice insiruire de valori,.. =>intr o valoare
//statement=nu rezulta intr o valoare
//orice expresie este un statement nu toate statementurile rezulta in expresie

//const nu blocheaza mutatiile
//var vs let
//var global let local !!depinde
//let block scoped, dar var nu

//Primitive data types
/*
nu pot fi compuse si nu pot suferi mutatii
    number
    string
    boolean
    undefined
    null
    symbol--chestii de functionaliatate (iterabil)
    bigInt--calcule mai precise
*/
console.log(typeof 12n);
console.log(typeof Symbol('dasd'));
console.log(typeof null); //is not an object 000cod de asta returneaza 000

//Numbers
console.log(2/0); //infinity
console.log(typeof Infinity);
console.log(3/'c'); //typeofNan is number
console.log(NaN === NaN); //nu e egala cu ea insasi!!! singura
console.log(Number.isNaN(NaN)); //isNan fara number nu rezulta daca e Nan si undefined este nan

let num = 2;
num =2+3
console.log(num)

//Strings
let str = 'test';
console.log(str);
console.log(Number('2') + 2);
console.log(Number('2') + 2);
console.log(Boolean('2') + 2);
console.log(+'2' + 2); //converteste 2 in number
console.log(Math.PI.toFixed(4)); //string
console.log((3.1415).toFixed(2)); //temporary decoration cu un obiect care coresp tipului resp
console.log('Paul'.charAt(0));
console.log('Paul'[0]);
console.log(str[0]);
str[0] = 'P';  //string immutable nu schimba variabila
console.log(str);


let strr = `Paul ${num} Negoescu`;  //template literal strings suporta enter
console.log(strr);

//Boolean
const condition = true;
if(condition){
    console.log('Adevarat')
}else{
    console.log('False');
}
//'' falsy =>false
//orice nr in afara de 0 si nan si undefined si null sunt thruthy
//[] {}  function(){} sunt adev

const conditionn = true && 4;

console.log(conditionn);

//shorthand conditionals
//nullish coalescing operator
const con = num ?? 6; //daca num e 0 nu ni l ascunde doar null si undefined nu trec, pt valori in general


switch(num){
    case 1:
        console.log('unu');
        break;
    case 2:
        console.log('doi num');
        break;
    case '2':
        console.log('doi str') ;
        break;
    default:
        console.log('altceva');    
}


//const arr = [1,2,3,'Paul', ['doi','trei', function(){}]];
const arr = [1,2,3,'Paul', ['doi','trei']];
//const cv =arr.push('o valoare');
// arr.unshift('ceva');  //la inceput shift scoate din cap
// console.log(arr[4][1]);
// console.log(arr);

// console.log(arr,cv);
// const sm = arr.pop();
//splice valori din mijloc
let i = 0;
while(i < arr.length){
    console.log(arr[i]);

    i++;
}
//of pt valori
for(const elem of arr){
    console.log(elem);
}

//index sub forma de string, arr[0] se conv la string, cheile sunt stocate ca stringuri
//length nu apare pt ca e enumerable
for(const index in arr){
    console.log(index);
}

//se converteste nr la string
console.log(arr['4']);

arr.forEach((elem,index) => console.log(elem));

console.log(arr.includes(3), arr.indexOf('Paul') > -1, arr.findIndex((elem) => elem.length > 2));


console.clear();

// declaratie --parametri
function add(a =2,b = 2, ...rest){
    console.log(rest);
    return a+b;
}

//argumente
//console.log(add(1,0,4,5));

//console.log((add(arr))); //concatenare a arr ului si b ul

//spread operator, imprastie
console.log(add(...arr));

//doar cu array uri la functii
const arr2 = [6,7,8];
const arr3 = [...arr, 8,9, ...arr2];
console.log(arr3);

//new thingg []
const clone = [...arr2];
const copy = arr2;
console.log(arr2,copy,clone);
//copy[1] = 'Paul';

console.log(arr2, clone,copy);
// console.log(arr2 === copy, clone === arr2);

console.clear();
function alter(obj){
    const clone = [...obj];
    clone[4][0] = 'Paul';
}
alter(arr);
//clonare superficiala
//poz4 o eticheta la ceva, se modifica adresa
console.log(arr);


console.clear();

//Function declaration
function alter(obj){
    const clone = structuredClone (obj);
    clone[4][0] = 'Paul';
}
alter(arr);
//clonare superficiala
//poz4 o eticheta la ceva, se modifica adresa
console.log(arr);

//primitive imutabile, restul mutabile atentie la const nu pot zice arr = .., dar putem modifica la referinta

//args mereu un array
const input =[2,3,4,5,6,7,8];
function multiply(...args){
    // let prod = 1;
    // for(const num of args){
    //     prod = prod * num;
    // }
    // return prod;

    return args.reduce((prod, num) => prod*num, 1);
}
console.log(multiply(...input));

//Function Expression
// const add2 = function(a,b){
//     return a+b;
// };

//arrow function
const add2 = (a,b) => a+b;
  

console.log(multiply(1,2,4,5,6,7), add(1,2));



















