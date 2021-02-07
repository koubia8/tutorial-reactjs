import React, {Component} from 'react'

class CounterClass extends Component{

    state={
        counter:0
    }
 handleClick(){
    this.setState({counter: this.state.counter+1})
   // console.log(this.state.counter)
 }
 componentDidUpdate(){
    setTimeout(() => {
        console.log(`You clicked ${this.state.counter} times`);
      }, 3000);
 }
 render(){
     return(
         <div>
               <p>Your clickes {this.state.counter} times</p>
         <button 
         onClick={()=>this.handleClick()}>
             Click me</button>
       {/*  <button onClick={handleAlertClick}>
            Show alert
        </button> */}
         </div>
     )
 }
}

export default CounterClass