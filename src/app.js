class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title : 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      options: [],
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  };

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  };

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
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.handleDeleteOptions }>Remove All</button>
        <ol>
        {
          this.props.options.length !== 0 ? this.props.options.map((option, index) => <Option key={index} text={option} />) : ''
        }
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <li>
        {this.props.text}
      </li>
    )
  }
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
    console.log(error)
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