import React from 'react';
class Child extends React.Component{
    render(){
      return(
        <div>
          <h1>{this.props.name}</h1>
      <h2>Price : Rs {this.props.price}</h2>

        </div>
      )
    }
  }
  export default Child;