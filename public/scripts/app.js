'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Luis Locon',
  age: 24,
  location: 'Guatemala'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

// Create a templateTwo var JSX EXPRESSION
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  ' ',
  user.name && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  ' ',
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
