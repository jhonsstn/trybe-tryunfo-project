import PropTypes from 'prop-types';
import React from 'react';

class Input extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     someKey: 'someValue',
  //   };
  // }

  render() {
    const { label, id, type, dataTestId, onInputChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          type={ type }
          id={ id }
          name={ id }
          checked={ value }
          value={ value }
          data-testid={ dataTestId }
          onChange={ onInputChange }
          required
        />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default Input;
