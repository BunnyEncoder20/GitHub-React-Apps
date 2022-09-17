import React, { Component } from 'react';

class Counter extends Component {
    // state is a special property in React Component
    // Basically an object which includes any data that this como=ponent reequires

    state = { 
        count:0,
        imgUrl : 'https://picsum.photos/200', //this URL puts a random 200x200 picture 
        tags: ['tag1','tag2','tag3']
     } ;

     style = {
        fontSize: 50,
        fontWeight: "bold"
     };

     
     render() { 
         //we put () after return if me have a multi-line return expression, otherwise Babel will not see the expression on the next line
         //Babel also cannot understand if there are more than one html element (eg: <h1> and <button>)
         //so we must wrap the many elements in a single div element
         //if we do not want the div tag then, we can use React.Fragment
         
        return(
            <React.Fragment>
                <h1>Hello Worl from Counter Component</h1>
                <span>{this.state.count}</span> {/* The {} within the span are used to render the dynamic JS references*/}
                <span>{this.formatCount()}</span> {/*This is how to return a functions result to the dynamic span */ }
                <span>{this.formatCount2()}</span>

                <img src={this.state.imgUrl} alt="Random" />

                {/*  these className are bootstrap styling, read it to understand these*/}
                <span className='badge badge-primary m-2'>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>

                {/*  These below use a seperate (not recommended) way of using styling */}
                <span style={{ fontSize: 50, fontWeight: 'bold' }} className='badge badge-primary m-2'>{this.formatCount()}</span>
                <button style={{ fontSize:30 }} className='btn btn-secondary btn-sm'>Increment</button>

                {/* Dynamic Changing badges classes according to count value */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className={this.getBadgeClasses()}>Increment</button>

                {/* Rendering a Dynamic Array, list of elements (here : tags) */}
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
                </ul>
            </React.Fragment>
            
        );
    }

    formatCount(){  
        const { count } = this.state; //object destructuring
        return count === 0 ? 'Zero' : count;
    }
    formatCount2(){     //return a jsx element 
        const { count } = this.state; //object destructuring
        return count === 0 ? <h1>Zero</h1> : count;
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count===0) ? "warning" : "primary" ;
        return classes;
    }
}
 
export default Counter;