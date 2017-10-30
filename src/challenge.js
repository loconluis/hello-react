const challenge = {
  title: 'Visibility Toggle',
  details: 'Im a detail so please love me'
}

const appRoot = document.getElementById('app');

let visible = false;

const toggleVisible = () => {
  visible = !visible;

  render()
}

const render = () => {
  const tem = (
    <div>
      <h1>{challenge.title}</h1>
      <button onClick={toggleVisible}>
        {visible ? 'Hide details' : 'Show details'}
      </button>
      {
        visible ? <div><p>{challenge.details}</p></div> : ''
      }
    </div>
  );

  ReactDOM.render(tem, appRoot);
}

render();