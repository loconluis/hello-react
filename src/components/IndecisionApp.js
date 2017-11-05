import React from 'react';

// Components
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {
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
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  };

  componentDidMount () {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
  
      if(options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      // Do nothing at all
    }
  };
  
  componentDidUpdate (prevProps, prevState) {

    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
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
