import { useReducer, useState } from "react";
// nu ajunge la browser
import styles from './Counter.module.css'
import clsx from "clsx";

const initialCount = 0;

//interfetele pot extinde alte interfete--interfete pt obiecte
// interface Action{
//     type: 'update' | 'reset'
//     payload:number
// }

//type myType = number | string

function counterReducer(oldState: number, action: {type: 'update' | 'reset', payload: number}){
    let newState = oldState;
    switch(action.type){
        case 'update':
            newState = newState + action.payload
            break;
        case 'reset':
            newState = action.payload;
            break;
        default:
            throw new Error(`Action ${action.type}, ${action.payload}`);
    }

    return newState;

}
//? optional pt a nu specifica initialCount
export function Counter({initialCount = 0} : {initialCount?: number}){
    //const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(counterReducer, initialCount);

    // function handleClick(action){
    //     switch(action){

    //     }
    // }
// let cls = '';
// if (count > 0){
//     cls = styles.positive;
// }else if (count < 0){
//     cls = styles.negative;
// }
   

    return(
        //create an array
        //create a div
        //create a fragment --sintaxa prelungita React.Fragment

        <>
        <h1>Counter {initialCount}</h1>
        <p>
        {/*  count > 0 ? styles.positive : count < 0 ? styles.negative : ' ' */ }
            <output className={ clsx({[styles.positive]: count > 0, [styles.negative]: count < 0})}>{count}</output>
        </p>
        <p><button onClick={() => dispatch({type: 'update', payload: -5})}>-5</button>
            <button onClick={() => dispatch({type: 'update', payload: -1})}>-</button>
            <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset</button>
            {/* <button onClick={() => setCount(count+1)}>+</button> */}
            <button onClick={() => dispatch({type: 'update', payload: 1})}>+</button>
            <button onClick={() => dispatch({type: 'update', payload: 5})}>+5</button>
        </p>
        </>
    )
}

// let state;
// function myUseState(initialState){
//     if(state == undefined){
//         state = initialState;
//     }

//     function setState (newState){
//         state = newState
//         Counter()
//     }
//     return [state, setState]
// }

// const[count, setCount]= myUseState(0);

// return (
//     React.createElement('div',null,
//     React.createElement('h1'),
//     React.createElement('p')
//     )

// )