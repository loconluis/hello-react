import React from 'react'

// This could be an stateless component
const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.text}</p>
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.text)
      }}
      className="button button--link"
    >
      remove
    </button>
  </div>
);
// if is stateless component preferr use this
export default Option;