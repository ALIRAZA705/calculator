import React , {Component} from 'react'
import Functional from './Functional'

class Class extends Component{
    constructor(props){
        super(props)
        this.state={
            message:true
        }
      
    }

render(){
    if(this.state.message){
return(
<div>

<p>ali message</p>
</div>

)

}
else{
return(
    <div>
    
    <p>ali no message</p>
    </div>
    
    )
}


}

}
export default Class