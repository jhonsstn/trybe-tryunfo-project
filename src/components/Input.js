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
    const { label, id, type, dataTestId } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input type={ type } id={ id } data-testid={ dataTestId } required />
      </label>
    );
  }
}

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
