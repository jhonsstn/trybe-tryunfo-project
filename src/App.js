import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr01: '',
      attr02: '',
      attr03: '',
      image: '',
      rarity: '',
      tryunfo: false,
      submit: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
    console.log(checked); // TODO: Lembrar de retirar
  };

  onSaveButtonClick = () => {};

  render() {
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
      rarity,
      tryunfo,
      submit,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ tryunfo }
          // hasTrunfo={} TODO: Sera usado mais a frente
          isSaveButtonDisabled={ submit }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />

        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr01 }
          cardAttr2={ attr02 }
          cardAttr3={ attr03 }
          cardImage={ image }
          cardRare={ rarity }
          cardTrunfo={ tryunfo }
        />
      </div>
    );
  }
}

export default App;
