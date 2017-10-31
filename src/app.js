class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['One', 'Two', 'Three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
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
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
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
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Write an option here..." />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))