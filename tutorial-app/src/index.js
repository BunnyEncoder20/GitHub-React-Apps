import React from 'react' ;
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>; 
//this is a jsx element. It makes a call to the React.createElement. Hence the import above are required
//Even though we don't call it directly, the compiler of JS, Babel coverts it into a form that browsers can undersstand 
//This is  part of the virtual DOM (not the actual DOM which is shown on the browsers)

console.log(element); //shows on the console as an 'object'
ReactDOM.render(element, document.getElementById('root'));
// Renders the element we created into the actual DOM. 
//ReactDOM.render(element-to-be-render, the html element reference where we want it to be rendered, here the root div tag in index.html)