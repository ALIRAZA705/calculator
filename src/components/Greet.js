import React from 'react'
// function Greet(props)
const Greet = props =>
{
    console.log(props)
    // props.name='razarazaax'
    return (
        <div>
    <h1>ali {props.name} {props.children}</h1>
{props.children}
</div>
    )
} 
export default Greet