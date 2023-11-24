/*
  DOM-arbore de obiecte
  fiecare obiect este un nod
  un nod pt html,unul pt body..
  expune acest document pentru javascript
*/

// console.dir(document);
// document.title='Paul';
// document.body.innerText = 'This is a demo';
// document.body.innerHTML = '<h1>Test</h1>';


//Counter
(function (){


//const buttons = document.querySelectorAll('[data-counter-button]');  //nodelist
//const decButton = document.querySelector('[data-counter-button = decrement]');
const output = document.querySelector('[data-counter-output]');
const stepInput = document.querySelector('[data-counter-step-input]');
//let count = Number(output.innerText);  --not ok

// for(const button of buttons){
//     button.addEventListener('click', handleClick);
// }

//Event delegation
document.addEventListener('click', handleClick);

let count = 0;
displayValue(count);

//console.log(incButton,decButton);

//incButton.addEventListener('click', handleClick);

function displayValue(val){
    output.classList.remove('positive', 'negative');
    if(val > 0){
        output.classList.add( 'positive');
    }else if(val < 0){
        output.classList.add( 'negative');
    }
    output.innerText = val;
}

const initialCount = 0;
const initialStep = 1;
stepInput.value = initialStep;


function handleClick(e){
   const action =  e.target.dataset.counterButton;
   if(action === undefined){
    return;
   }
   const stepFromDom = e.target.dataset.counterStep ?? stepInput.value;
   const step = Number(stepFromDom) ;

   switch(action)
   {
    case 'increment':
        count+=step;
        break;
    case 'decrement':
        count-=step;
        break;  
    case 'reset':
        count = initialCount;
        break;    
    default:
        throw Error('The action "${action}" is not implemented')      
   }
    displayValue(count);
}

})();

//TodoList
(function(){
    const todos = [
        {id:1,title:"Buy Milk", completed:false},
        {id:2,title:"Visit grandma", completed:true}
    ];

    const list = document.querySelector('[data-todos-list]');
    function hidrateList(todos){
        const fragment = document.createDocumentFragment();
        for(const todo of todos){
        const item = document.createElement('li');
        const check = document.createElement('input');
        const label = document.createElement('label');

        check.type = 'checkbox';
        check.checked = todo.completed;
        
        label.textContent = todo.title;
        label.prepend(check);
        item.append(label);
        //item.textContent = 'Title';
        fragment.append(item);
       
        }
        list.append(fragment);
}
//hidrateList(todos);
hidrateList(fragment);


})();
