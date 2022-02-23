import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     someKey: 'someValue'
  //   };
  // }

  render() {
    const { id, label, dataTestId, disabled, onSaveButtonClick } = this.props;

    return (
      <button
        disabled={ disabled }
        name="submit"
        type="submit"
        id={ id }
        data-testid={ dataTestId }
        onClick={ onSaveButtonClick }
      >
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
