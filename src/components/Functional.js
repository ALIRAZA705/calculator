        import React from 'react'

        function Functional(props)
        {
           
const name=['ali','raza','mobeen']
const namelist =name.map(nam => <h2>{nam}</h2>)
const person = [

{
id:1,
name :'ali',
experience:10,
skill:'good'
},
{
        id:1,
        name :'raza',
        experience:5,
        skill:'good'
        },

        {
                id:1,
                name :'mobeen',
                experience:10,
                skill:'excellent'
                }
                


]
const personlist =person.map(per=>( 
<h2>key={per.name} {per.name} {per.experience}</h2> 
))
return (<div>

{/* <button onClick={props.reetthandle}>click</button> */}
{/* <h2>{name[0]}</h2> */}
{/* name.map(nam => {nam}) */}
{/* <h2>{person.map(per =>(per.name ,per.skill) )}</h2> */}
     {personlist}   
</div>)



        }
        export default Functional