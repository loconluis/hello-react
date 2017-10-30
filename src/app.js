console.log('App.js is running!')

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX - Javascript XML
const template = 
  (<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
  );

const user = {
  name: 'Luis Locon',
  age: 24,
  location: 'Guatemala'
}

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>
  }
}

// Create a templateTwo const JSX EXPRESSION
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1> {/*Operador ternario IF STATMENT*/}
    {(user.name && user.age >= 18) && <p>Age: {user.age}</p>} {/*Rigth value is used when is true*/}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app')


ReactDOM.render(templateTwo, appRoot)