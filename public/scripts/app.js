'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";

    render();
  }
};

var clearOptions = function clearOptions() {
  app.options.length = 0;
  render();
};

// JSX - Javascript XML


var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.length > 0 ? app.options.map(function (option, index) {
        return React.createElement(
          'li',
          { key: index },
          option
        );
      }) : ""
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    ),
    React.createElement(
      'button',
      { onClick: clearOptions },
      'Clear'
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
