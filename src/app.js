console.log('App.js is running!')

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX - Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

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

const appRoot = document.getElementById('app')

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