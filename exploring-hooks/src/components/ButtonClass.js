import {Component} from 'react'
export default class Button extends Component{
    constructor(){
        super()
        this.state={buttonText:"Click me, please"}
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(()=>{
            return {buttonText: "Thanks,been clicked  !"}
        })
    }
    render(){
        const {buttonText}=this.state
    return (
    <button className="text-center" onClick={this.handleClick}>
        {buttonText}
        </button>)
    }
}