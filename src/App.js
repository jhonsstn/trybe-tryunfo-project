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
      submit: false, // TODO: Deve iniciar em true
      cards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
      rarity,
      tryunfo,
    } = this.state;
    const newCard = {
      name,
      description,
      attr01,
      attr02,
      attr03,
      image,
      rarity,
      tryunfo,
    };
    this.setState((prev) => ({
      cards: [...prev.cards, newCard],
    }));
    this.setState({
      name: '',
      description: '',
      attr01: 0,
      attr02: 0,
      attr03: 0,
      image: '',
      rarity: '',
      tryunfo: false,
    });
  };

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
      cards,
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

        {cards.map((card) => (
          <Card
            key={ card.name }
            cardName={ card.name }
            cardDescription={ card.description }
            cardAttr1={ card.attr01 }
            cardAttr2={ card.attr02 }
            cardAttr3={ card.attr03 }
            cardImage={ card.image }
            cardRare={ card.rarity }
            cardTrunfo={ card.tryunfo }
          />
        ))}
      </div>
    );
  }
}

export default App;
