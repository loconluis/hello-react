class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title : 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      options: props.options,
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  };

  componentDidMount () {
    console.log('Component did mount!')
  };
  
  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate')
  };
  
  componentWillUnmount() {
    console.log('Component will unmount!')
  }
  

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ 
      options: prevState.options.filter(option => optionToRemove !== option) 
    }))
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist.'
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  };

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random]
    console.log(option);
    alert(option)
  }

  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <Action 
          hasOptions={ this.state.options.length > 0 } 
          handlePick={this.handlePick}
        />
        <Options
          options={ this.state.options }
          handleDeleteOptions={this.handleDeleteOptions} //plural
          handleDeleteOption={this.handleDeleteOption} //singular
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
}
// This could be an stateless component || pure functions
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
Header.defaultProps = {
  title: 'Some default!'
}

// This could be an stateless component
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}
// This could be an stateless component
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ol>
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
      </ol>
    </div>
  )
}
// This could be an stateless component
const Option = (props) => {
  return (
    <li>
      {props.text}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.text)
        }}
      >
        Remove
      </button>
    </li>
  )
  
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    }

    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }))

    e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" placeholder="Write an option here..." />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))