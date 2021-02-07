import React, {Component} from 'react';

class ClassCount extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        document.title=`vous avez cliquez ${this.state.count} fois`
    }
    componentDidUpdate(){
        document.title=`vous avez cliquez ${this.state.count} fois`
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Incrementer</button>
            </div>
        )
    }
}
export default ClassCount;