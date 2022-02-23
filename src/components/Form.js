import React from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Button from './Button';

class Form extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     someKey: 'someValue',
  //   };
  // }

  render() {
    return (
      <form>
        <Input
          dataTestId="name-input"
          label="Nome"
          id="name"
          // maxlength="40"
          type="text"
        />
        <TextArea
          dataTestId="description-input"
          label="Descrição"
          id="description"
          // maxlength="1000"
        />
        <Input
          dataTestId="attr1-input"
          label="Attr01"
          id="attr01"
          // maxlength="40"
          type="number"
        />
        <Input
          dataTestId="attr2-input"
          label="Attr02"
          id="attr02"
          // maxlength="40"
          type="number"
        />
        <Input
          dataTestId="attr3-input"
          label="Attr03"
          id="attr03"
          // maxlength="40"
          type="number"
        />
        <Input
          dataTestId="image-input"
          label="Imagem"
          id="image"
          // maxlength="40"
          type="text"
        />

        <Select dataTestId="rare-input" label="Raridade" id="rarity" />

        <Input
          dataTestId="trunfo-input"
          label="Super Trybe Trunfo"
          id="tryunfo"
          // maxlength="40"
          type="checkbox"
        />

        <Button
          dataTestId="save-button"
          label="Salvar"
          type="submit"
          id="save"
        />
      </form>
    );
  }
}

export default Form;
