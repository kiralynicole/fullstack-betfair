import React from 'react';
import ReactDOM from 'react-dom/client'
//named import   -as AltNume
import { App } from './components/App';



ReactDOM.createRoot(document.getElementById('root')!).render(
   //title

  //NU E HTML, in spate e JAVASCRIPT-JSX
  // <h1>Hello from 
  //   <a href= "https://react.dev" target = "_blank">
  //     JSX
  //   </a>
  // </h1>

  <React.StrictMode>
    <App />
    {/* <Paul /> */}
  </React.StrictMode>


);



//import {App,default as Paul} from './components/App';


//default import
//import Appp from './components/App';



// react creeaza elementele virtual
// reactdom se ocupa de translatarea in limbaj dom

// const title = React.createElement('h1',null,'Hello from ', 
// React.createElement('a', {href: 'https://react.dev', 'target': '_blank'}, 'React'));

//destructurare
// const o = {
//   prop:0
// };

// const{prop: altNume} = o;


// const title = (
//   <h1>Hello from 
//       <a href= "https://react.dev" target = "_blank">
//         JSX
//       </a>
//     </h1>
//   );

// const outContent = React.createElement(App,null, null);