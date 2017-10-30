//=================================================================================
let count = 0;
const addOne = () => {
  count++;
  renderCounterApp()
}
const minusOne = () => {
  count--;
  renderCounterApp()
}
const reset = () => {
  count = 0
  renderCounterApp()
}



const renderCounterApp = () => {
  const t2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(t2, appRoot);
}

renderCounterApp()