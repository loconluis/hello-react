import React from 'react'

// This could be an stateless component
const Option = (props) => (
  <div>
    {props.text}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.text)
      }}
    >
      Remove
    </button>
  </div>
);
// if is stateless component preferr use this
export default Option;