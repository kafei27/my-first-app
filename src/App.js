import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'afdf4' , name: 'Juan', age: 25 },
      { id: 'bwef6' , name: 'Jose', age: 27 },
      { id: 'cfg45' , name: 'Pedro', age: 28 }
    ],
    otherState: 'other value',
    showPersons: false
  }

  namechangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} 
              changed={(event) => this.namechangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <div className='App'>
        <h1>Hi, Im a React App</h1>
        <button
          style={style}
          onClick={this.tooglePersonsHandler}>Switch name</button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this works now?'));
  }
}

export default App;