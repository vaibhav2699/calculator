import React from "react";

class Task extends React.Component{
    constructor(props){
        super(props);

    }
   
    componentDidMount(){
        window.addEventListener('keypress',e=>{
            console.log(e.key)
        })
    }
    render(){
        return(
            <div>
                {/* <textarea onKeyUp={this.handleTest} style={{border:"none"}}/> */} 
            </div>
        )
    }
}

export default Task