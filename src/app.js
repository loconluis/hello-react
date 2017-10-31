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
  handlePick () {
    alert('Handle Pick')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  removeAll() {
    alert('Handle Remove')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ol>
        {
          this.props.options.length !== 0 ? this.props.options.map((option, index) => <Option key={index} text={option} />) : ''
        }
        </ol>
        <button onClick={this.removeAll}>Remove All</button>
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
  handleAdd(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim();

    if(option) {
      alert('Adding ' + option);
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input type="text" name="option" placeholder="Write an option here..." />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))