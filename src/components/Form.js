import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Checkbox from './Checkbox';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo, // TODO: Vai ser usado mais a frente
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      // alreadyHaveTrunfo,
    } = this.props;

    return (
      <form>
        <Input
          dataTestId="name-input"
          label="Nome"
          id="name"
          type="text"
          value={ cardName }
          onInputChange={ onInputChange }
        />
        <TextArea
          dataTestId="description-input"
          label="Descrição"
          id="description"
          value={ cardDescription }
          onInputChange={ onInputChange }
        />
        <Input
          dataTestId="attr1-input"
          label="Attr01"
          id="attr01"
          type="number"
          value={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <Input
          dataTestId="attr2-input"
          label="Attr02"
          id="attr02"
          type="number"
          value={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <Input
          dataTestId="attr3-input"
          label="Attr03"
          id="attr03"
          type="number"
          value={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <Input
          dataTestId="image-input"
          label="Imagem"
          id="image"
          type="text"
          value={ cardImage }
          onInputChange={ onInputChange }
        />

        <Select
          dataTestId="rare-input"
          label="Raridade"
          id="rarity"
          value={ cardRare }
          onInputChange={ onInputChange }
        />

        {hasTrunfo ? (
          <p> Você já tem um Super Trunfo em seu baralho </p>
        ) : (
          <Checkbox
            dataTestId="trunfo-input"
            label="Super Trybe Trunfo"
            id="tryunfo"
            type="checkbox"
            checked={ cardTrunfo }
            onInputChange={ onInputChange }
          />
        )}
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  // alreadyHaveTrunfo: PropTypes.func.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired, // TODO: Vai ser usado mais a frente
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
