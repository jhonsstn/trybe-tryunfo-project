import PropTypes from 'prop-types';
import React from 'react';

class TextArea extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     someKey: 'someValue',
  //   };
  // }

  render() {
    const { label, id, dataTestId, value, onInputChange } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <textarea
          name={ id }
          id={ id }
          data-testid={ dataTestId }
          value={ value }
          onChange={ onInputChange }
          cols="30"
          rows="10"
          required
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextArea;
