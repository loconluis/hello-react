console.log('App.js is running!')

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX - Javascript XML
var template = 
  (<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
  );

var user = {
  name: 'Luis Locon',
  age: 24,
  location: 'Guatemala'
}

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>
  }
}

// Create a templateTwo var JSX EXPRESSION
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1> {/*Operador ternario IF STATMENT*/}
    {(user.name && user.age >= 18) && <p>Age: {user.age}</p>} {/*Rigth value is used when is true*/}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app')


ReactDOM.render(templateTwo, appRoot)