import React,{Component} from 'react'

class StatInClass extends Component{

    state={
        counter:0
    }
    addOne=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    render(){
        return(
            <div>
               <p>class State: {this.state.counter}</p>
               <button onClick={this.addOne}>State dans class</button>
            </div>
        )
    }
}
export default StatInClass