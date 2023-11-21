'use strict';

//Scope
//hoisting
//var a;  var sau function
//let nu merge sau const,trebuie declarate inainte

//what is scope? vizibilitatea variabilei--what names we can access in the current place
//1 Global scope->
// a. variables declared inside normal js files(not modules)
//    i.Script Scope-> global scope for const,let and const
////var declara variabile in scopul curent
//b.explicitly declared as property of the global object

//2.Local scope === inside functions
//  a.closure
//3. block scope -> for const,let and class declarations
//  a. closure
//4.module scope -> special files considered modules  in html type="module"
//  a. closure


//console.log(a);
//var a = 1;
//a=1
//console.log(a);

//const a =1;


//nu apar pe obiectul global, apar pe script scope
// const a = 'Paul'
// let c = 42;

// function scopeFn(a){
//    // window.b = 2;  //global
//     globalThis.b=2;
//     debugger; //blocheaza ex codului
//     console.log('Inside: ', {a,b});
// }
// scopeFn(1);
// console.log('Outside: ', {b});



// const b = 'Paul'

// //daca nu exista un b in functie se va afisa paul, altfel eroare pt ca il recunoaste pe b, dar nu e declarat inainte de console.log
// function scopeFn(a){
//     console.log('Inside: ', {a,b});
//     let b = 5;
// }
// scopeFn(1);
// console.log('Outside: ', {b});


const b = 'Paul'

function scopeFn(a){
    if(true){
        var b = 'test'
        console.log('Inside if: ', {a,b});
        
    }
    console.log('Inside: ',{a,b});  //daca b e var se afiseaza test 
}

function parent(a){
    function child(b){
        return a+b;
    }
    return child;
}

const func = parent(1);
const func2 = parent(5);
//console.log(func(2), func2(5));


//5 de 5 ori dupa 2 sec cu var, dar cu let apare 0 1 2 3 4
//let si const creeaza local scope, ia valorile din closure
// for(var j =0; j < 5; j++){
//     setTimeout(()=>console.log(j), 2000);
// }


//scopeFn(1);
//console.log('Outside: ', {b});


//Objects
const user = {
    b,
    firstName: 'Paul',
    lastName: 'Negoescu',
    height: 1.85,
    weight: 85,
    0:'unu',
    1:'doi',
    2:'trei',
    calculateBmi(){
        return (this.weight / this.height **2).toFixed(2);
    }
};

// for(const key in user){
//     console.log(key);
// }

console.log(user);
console.log(user.calculateBmi());

//user.0 nu merge
const prop = 'height'
console.log(user[0]);
console.log(user['firstName']);
console.log(user[prop]);
//nu exista prop prop
console.log(user.prop);



const func3 = user.calculateBmi;
console.log(func3());






