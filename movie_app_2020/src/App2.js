import React from 'react';

class App2 extends React.Component{
  constructor(props){
    super(props);
    console.log('hello');
  }
  componentDidMount(){
    console.log('component rendered');
  }
  componentDidUpdate(){
    console.log('I just updated');
  }
  componentWillUnmount(){
    console.log('Goobbye, cruel world');
  }
  state = {
    count : 0,
  };
  add =() =>{
    console.log('add');
    this.setState(current=>({
      count: current.count +1,
    }));

    // 성능구리다.
    // this.setState({count: this.state.count + 1});
  };

  minus =()=>{
    console.log('minus');
    this.setState(current=>({
      count: current.count -1,
    }))
  
    //  this.setState({count: this.state.count - 1});
  };

  render(){
    console.log("I'm rendering");
    return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App2;
