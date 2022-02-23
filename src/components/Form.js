import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

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
      // hasTrunfo, TODO: Vai ser usado mais a frente
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <Input
          dataTestId="name-input"
          label="Nome"
          id="name"
          // maxlength="40"
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

        <Input
          dataTestId="trunfo-input"
          label="Super Trybe Trunfo"
          id="tryunfo"
          type="checkbox"
          value={ cardTrunfo }
          onInputChange={ onInputChange }
        />

        <Button
          dataTestId="save-button"
          label="Salvar"
          type="submit"
          id="save"
          disabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.any, TODO: Vai ser usado mais a frente
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
