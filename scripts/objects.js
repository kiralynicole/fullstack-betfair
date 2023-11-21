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

console.clear();
//nu apar pe obiectul global, apar pe script scope
 const a = 'Paul'
 let c = 42;


// function scopeFn(a){
//    // window.b = 2;  //global
//     globalThis.b=2;
//     //debugger; //blocheaza ex codului
//     console.log('Inside: ', {a,b});
// }
// scopeFn(1);
// console.log('Outside: ', {b});



 //const b = 'Paul'

 //daca nu exista un b in functie se va afisa paul, altfel eroare pt ca il recunoaste pe b, dar nu e declarat inainte de console.log
// function scopeFn(a){
//     console.log('Inside: ', {a,b});
//     let b = 5;
// }
// scopeFn(1);
// console.log('Outside: ', {b});


//  const b = 'Paul'

// function scopeFn(a){
//     if(true){
//         var b = 'test'
//         console.log('Inside if: ', {a,b});
        
//     }
//     console.log('Inside: ',{a,b});  //daca b e var se afiseaza test 
// }
// scopeFn(1);


// function parent(a){
//     function child(b){
//         return a+b;
//     }
//     return child;
// }

//  const func = parent(1);
//  const func2 = parent(5);
// console.log(func(2), func2(5));


//5 de 5 ori dupa 2 sec cu var, dar cu let apare 0 1 2 3 4
//let si const creeaza local scope, ia valorile din closure
// for(var j =0; j < 5; j++){
//     setTimeout(()=>console.log(j), 2000);
// }

 //scopeFn(1);
// //console.log('Outside: ', {b});


//Objects
const user = {
    firstName: 'Paul',
    lastName: 'Negoescu',
    height: 1.85,
    weight: 85,
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val){
        const parts = val.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    0:'unu',
    1:'doi',
    2:'trei',
    calculateBmi(){
        return (this.weight / this.height **2).toFixed(2);
    },
    // echoThis:(a,b) => {
    //     return {'this':this,a,b};
    // }
    echoThis(a,b) {
       setTimeout(()=>
       console.log ({'this':this,a,b}),100);
    }
};

// // for(const key in user){
// //     console.log(key);
// // }

// console.log(user);
// console.log(user.calculateBmi());

// //user.0 nu merge
// const prop = 'height'
// console.log(user[0]);
// console.log(user['firstName']);
// console.log(user[prop]);
// //nu exista prop prop
// console.log(user.prop);

const o = {
    func:user.echoThis.bind('Paul',5),
    weight:100,
    height:1.7
};


const func3 = user.echoThis;
//console.log(o.func(7), user.echoThis());

/* This
    1. This is established at the mom of function invocation 
       a. this is whatever is to the left of the dot
       b.this is whatever we want when using call() or apply()
       call invoca functia
    2. This is established at the time of function creation
        a. arrow function take the value for this as if it was a variable in the current scope(lexical this)
        b. by using bind we can set this to whatever we want
    3. Constructor functions need to build their own this
*/

//Constructor functions

function User(firstName,lastName,height,weight){
    this.firstName= firstName;
    this.lastName= lastName;
    this.height= height;
    this.weight= weight;
    User.thisIsStatic = 42;
    User.prototype.calculateBmi = function(){
        return (this.weight / this.height **2).toFixed(2);
    };
}



const user2 = new User('Ion', 'Palade', 1.75,70);
const user3 = new User('Andreea', 'Axinte', 1.65,50);

//console.log(user2.calculateBmi());
//console.log(user2.firstName);

console.log(user3.calculateBmi === user2.calculateBmi); //false se duplica
//User.prototype nu se duplica functia; reprezinta un obiect central pe care il pot referentia prototypeul lui User(mostenire)
//prop generice
//static prop a clsei
//prototype referinta pt toate obiectele

User.prototype.toString = function(){
    return this.firstName + " " + this.lastName;
};

console.log(user3.calculateBmi(), user2.calculateBmi());
console.log(''+user3);

class Admin extends User{
    #thisIsPrivate = 'Private value';
    static instances = 0;
    //isAdmin = true
    constructor(...args){
        super(...args);
        Admin.instances++;
        this.isAdmin = true;
    }

    get fullName(){
        return  `${this.firstName} ${this.lastName}`;
    }

    set fullName(val){
        [this.firstName, this.lastName] = val.split(' ');
        
    }

    doAdminStuff(){
        console.log('Admin stuff');
    }

    toString(){
       return super.toString() + ' in admin!' + this.#thisIsPrivate;
    }
}

const admin = new Admin('Catalina', 'Popescu', 1.8,80);
console.log(''+admin);
admin.doAdminStuff();
console.log(Admin.instances);
console.log(Admin.thisIsStatic);

//console.log(admin.#thisIsPrivate); //private field
console.log(typeof Admin); //function not a class
//clasa apare in script scope]

console.log(user.fullName); //se foloseste ca o proprietate nu o functie
console.log(user.firstName);
user.fullName = 'George Maxim';
console.log(user.fullName);

admin.fullName = 'Test Testing';
console.log(admin.firstName);

console.clear();

//const [unu,doi] = [34,56];
const [unu,doi] = [,56];
//const{firstName,fullName:fName} = admin;
console.log(unu, doi);
//console.log(fName);

const {
   // obj:{prop},
    fullName:fName,
    altceva = 'Paul'
} = admin
console.log(altceva)

function testDestructuring({weight}){
    console.log('The weight is ', weight);
}

testDestructuring(admin);


//curring   ---closures
function add(n1)
{
    return function(n2){
        return n1*n2;
    }
}

console.log(add(1)(2));






