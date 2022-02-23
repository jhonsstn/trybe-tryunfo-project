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
    const { label, id, dataTestId } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <textarea
          name={ id }
          id={ id }
          data-testid={ dataTestId }
          cols="30"
          rows="10"
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextArea;
