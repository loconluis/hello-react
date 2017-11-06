import React from 'react'

// This could be an stateless component || pure functions
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);

Header.defaultProps = {
  title: 'Some default!'
}

export default Header;