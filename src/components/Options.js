import React from 'react';

import Option from './Option';

// This could be an stateless component
const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((option, index) => 
        (
          <Option
            key={index}
            text={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        )
      )
    }
  </div>
);

export default Options;