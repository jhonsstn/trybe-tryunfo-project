import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { id, label, dataTestId, disabled, onSaveButtonClick } = this.props;

    return (
      <button
        disabled={ disabled }
        type="submit"
        form={ id }
        id={ id }
        data-testid={ dataTestId }
        onClick={ onSaveButtonClick }
        value={ id }
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
