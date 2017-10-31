class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }

    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  addOne() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }))
  }

  minusOne() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }))

    // this.setState({counter: this.state.counter - 1}) // Most common way lol
  }

  reset() {
    this.setState(() => ({ counter: 0 }))

    // this.setState({counter: 0})
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.counter}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
const root = document.getElementById('app');

ReactDOM.render(<Counter />, root);


// //=================================================================================
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp()
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp()
// }
// const reset = () => {
//   count = 0
//   renderCounterApp()
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const t2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(t2, appRoot);
// }

// renderCounterApp()