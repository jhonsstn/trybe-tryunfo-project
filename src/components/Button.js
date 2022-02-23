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
    const { id, label, dataTestId } = this.props;

    return (
      <button type="submit" id={ id } data-testid={ dataTestId }>
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
