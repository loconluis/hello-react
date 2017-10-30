'use strict';

var challenge = {
  title: 'Visibility Toggle',
  details: 'Im a detail so please love me'
};

var appRoot = document.getElementById('app');

var visible = false;

var toggleVisible = function toggleVisible() {
  visible = !visible;

  render();
};

var render = function render() {
  var tem = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      challenge.title
    ),
    React.createElement(
      'button',
      { onClick: toggleVisible },
      visible ? 'Hide details' : 'Show details'
    ),
    visible ? React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        challenge.details
      )
    ) : ''
  );

  ReactDOM.render(tem, appRoot);
};

render();
