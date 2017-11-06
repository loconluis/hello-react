import React from 'react';

// Components
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

//Pull the state out of constructor
// Convert all 4 event handlers to class properties (Arrow function)
// detele the constructor
// start with class properties and end with method

export default class IndecisionApp extends React.Component {
  state = {
    title : 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ 
      options: prevState.options.filter(option => optionToRemove !== option) 
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item.'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exist.'
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }))
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random]
    console.log(option);
    this.setState(() => ({selectedOption: option}));
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  }

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

  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <div className="container">
          <Action 
            hasOptions={ this.state.options.length > 0 } 
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={ this.state.options }
              handleDeleteOptions={this.handleDeleteOptions} //plural
              handleDeleteOption={this.handleDeleteOption} //singular
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
