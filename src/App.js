import React from 'react';
import { nanoid } from 'nanoid';
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
      hasTrunfo: false,
      isSaveButtonDisabled: true, // TODO: Deve iniciar em true
      cards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState(
      () => ({
        [name]: type === 'checkbox' ? checked : value,
      }),
      () => this.validateInputs(),
    );
  };

  validateInputs = () => {
    const { name, description, attr01, attr02, attr03, image, rarity } = this.state;
    let buttonDisabled = false;
    if (!name || !description || !image || !rarity) buttonDisabled = true;
    const minValue = 0;
    const maxValue = 90;
    const totalValue = 210;
    const value1 = Number(attr01);
    const value2 = Number(attr02);
    const value3 = Number(attr03);
    if (value1 + value2 + value3 > totalValue) buttonDisabled = true;
    if (value1 < minValue
      || value2 < minValue
      || value3 < minValue) buttonDisabled = true;
    if (value1 > maxValue
      || value2 > maxValue
      || value3 > maxValue) buttonDisabled = true;
    this.setState({
      isSaveButtonDisabled: buttonDisabled,
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
    if (tryunfo) this.setState({ hasTrunfo: true });
    const newCard = {
      id: nanoid(),
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
      isSaveButtonDisabled: true,
    });
  };

  removeCard = (id, isTryunfo) => {
    const { cards, hasTrunfo } = this.state;
    const newCards = cards.filter((card) => card.id !== id);
    this.setState(() => ({
      cards: newCards,
      hasTrunfo: isTryunfo ? false : hasTrunfo,
    }));
  }

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
      isSaveButtonDisabled,
      cards,
      hasTrunfo,
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
          hasTrunfo={ hasTrunfo } // FIXME: Sera usado mais a frente
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          alreadyHaveTrunfo={ this.alreadyHaveTrunfo }
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
        <div>
          {cards.map((card) => (
            <div key={ card.id }>
              <Card
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.attr01 }
                cardAttr2={ card.attr02 }
                cardAttr3={ card.attr03 }
                cardImage={ card.image }
                cardRare={ card.rarity }
                cardTrunfo={ card.tryunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ () => this.removeCard(card.id, card.tryunfo) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
