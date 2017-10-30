console.log('App.js is running!')

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = "";

    render()
  }
}

const clearOptions = () => {
  app.options.length = 0;
  render()
}

const selectOne = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random]
  console.log(option);
  alert(option)
}

// JSX - Javascript XML


const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <ol>
        {app.options.length > 0 ? app.options.map((option, index) => <li key={index}>{option}</li>) : ""}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" placeholder="Wirte an option..." />
        <button>Add option</button>
      </form>
      <button disabled={app.options.length === 0} onClick={selectOne}>What should  I do?</button>
      <button onClick={clearOptions}>Clear</button>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

render();