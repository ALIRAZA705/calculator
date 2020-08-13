import React,{Component} from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            // message:'welcome'
            count : 0
        }
    }
    e1()
    {
    //     this.setState({
    //         // message:'aknasn'
    //         count:this.state.count+1
    //     },()=>{console.log('call back value' ,this.state.count) })
    //     console.log(this.state.count) // this is called before the state is actually set do we will use call back method here .
    // }
    // we want to update our previous value so we pass a function to set state method instead of an object
this.setState((prevstae)=>({
    count:prevstae.count+5
}))    
}
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.e1()}>click</button>
            </div>
        )
    }
}
export default Message