import PropTypes from 'prop-types';
import React from 'react';

class Select extends React.Component {
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
        <select name={ id } id={ id } data-testid={ dataTestId }>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
