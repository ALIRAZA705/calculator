import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Functional from './components/Functional'
import Class from './components/Class'
import * as Firebase from 'firebase';

function fun(){
  let table = []
  for(let i=0;i<=3;i++)
  {
    table.push(<td>{`Column ${i + 1}`}</td>)
  }
  return table

  
}
class App extends Component {









  constructor() {
    super()
    this.state = {

      first: 0,
      second: 0,
      result: 0,
      Opr: '+',
      status: 1,
      sm_var: 1,
      answer:0,
      a:0,
      href:0




    }
    this.e1 = this.e1.bind(this)
    this.e2=this.e2.bind(this)
    this.result=this.result.bind(this)
  }
  e1(e) {
let ab

    if (this.state.sm_var === 1) {
      ab = this.state.first + e.target.value
      this.setState({
        first: ab,
        
      
      })
    }
    else if (this.state.sm_var === 2) {
      ab = this.state.second + e.target.value
      this.setState({
        second: ab
      })
      
    }

  }
  result() {
    let a
    var numberAsInt = parseInt(this.state.first, 10); 
    var numberAsInt1 = parseInt(this.state.second, 10);
    if (this.state.opr === "+") {
      a = numberAsInt + numberAsInt1
    }
    else if (this.state.opr === "-") {
      a = numberAsInt - numberAsInt1
    }
    else if (this.state.opr === "*") {
      a = numberAsInt * numberAsInt1
    }
    else if (this.state.opr === "/") {
      a =numberAsInt / numberAsInt1
    }

this.setState({
  answer:a,
  sm_var: 3
})

  }
  e2(e) {
    this.setState({
      opr: e.target.value,
      sm_var: 2

    })

  }

  render() {
    return (
      <div className="App">


        {/* <button onClick= {this.e1 } value= 'mobeen'> click</button> */}
        {/* <button onClick= {this.e1} value= 'raza'>hello</button> */}
        <button onClick={this.e1} value="1">1</button>

        <button onClick={this.e1} value="2">2</button>
        <button onClick={this.e1} value="3">3</button>
        <button onClick={this.e1} value="4">4</button><br />
        <button onClick={this.e1} value="5">5</button>
        <button onClick={this.e1} value="6">6</button>
        <button onClick={this.e1} value="7">7</button>
        <button onClick={this.e1} value="8">8</button><br />
        <button onClick={this.e1} value="9">9</button>
        <button onClick={this.e1} value="0">0</button>
        <button onClick={this.e2} value="-">-</button>
        <button onClick={this.e2} value="+">+</button><br />
        <button onClick={this.e2} value="*">*</button>
        <button onClick={this.e2} value="/">/</button><br />
        <button onClick={this.result} value="=">=</button><br />
      
        <p>
        {this.state.sm_var===1 ? this.state.first:
       this.state.sm_var===2?this.state.second : this.state.answer } 
          </p>
        
<fun/>
<Functional/>
      </div>
    );
  }
}

export default App;
