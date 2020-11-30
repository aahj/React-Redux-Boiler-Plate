import React from 'react';
import './App.css'
import Child from './component/child'
import Home from './container/Home';

//--------------------Props------------------------
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Parent</h1>
        <hr />
        <Home />




        {/* <Child name='Corolla' price = '10 Million'/>
        <Child name='Civic' price = '40 Million'/>
        <Child name='Lamborghni' price = '100 Million'/> */}
      </div>
    )
  }
}

//--------------------States------------------------ 
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       carName: 'kawasaki ',
//       carModel: 'H2R',
//       val: ''
//     }
//   }
//   // setName = ()=>{    
//   //   this.setState({
//   //     Bike: this.state.val
//   //   })
//   // }

//   set_carDetails = (e) => {
//     // console.log(e.target.name)
//     // console.log(e.target.value)
//     this.setState({    
//       [e.target.name]: e.target.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1 style={{ color: 'blue' }}>hi</h1>

//         <h2>{this.state.carName}</h2>
//         <h2>{this.state.carModel}</h2>

//         <br />
//         {/* <input onChange={(e)=>this.setState({val: e.target.value})} type="text" placeholder='Enter Bike Name'/> */}
//         <input name="carName" onChange={(e) => this.set_carDetails(e)} type="text" placeholder='Type Car Name' />
//         <input name="carModel" onChange={(e) => this.set_carDetails(e)} type="text" placeholder='Type Car Model' />
//         <button onClick={this.setName}>Set</button>

//       </div>
//     );
//   }
// }
//--------------------States------------------------

export default App;
