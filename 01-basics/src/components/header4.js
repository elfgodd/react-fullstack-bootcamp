import React from 'react';

/*
Feature 1: onChange input, every char you type, it will
be added to the state, and printed in the browser
*/
/*
Feature 2: onClick button, counter it counts 1 value higher
everytime you click it,
*/

class Header4 extends React.Component {

  state = {
    active: 'active',
    title: 'Keywords are here:',
    keyword: '',
    count: 0
  }

  // Feature 1
  inputChangeHandler = (event) => {
    // swapping classes with ternary operator
    const value = event.target.value === '' ? 'active' : 'not-active';

    this.setState({
      active: value,
      keywords: event.target.value
    })
  }

  // Feature 2
  // addOne() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // With this way we can access the state and props
  addOne() {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }
  
  render() {
    // Accessing the state in the console
    console.log(this.state);

  return (
    <>
    <h1>Header4</h1>
    {/* <header style={{background: `${this.state.active ? 'red' : 'blue'}`}}> */}
    <header className={this.state.active}>
      <div className="logo">Logo</div>
      <input
        onChange={this.inputChangeHandler}
      />
      <div>{ this.state.title }</div>
      <div>{ this.state.keywords }</div>

      <br />
      <div>{ this.state.count }</div>
      <button onClick={ () => this.addOne() }>Add one</button>
    </header>
    </>
  );
 };
};

export default Header4;