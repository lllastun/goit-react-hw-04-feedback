import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './FeedbackOptions.module.css';
import Button from '../Button/Button';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div className={css.wrap}>
        {this.props.data.map(item => (
          <Button
            name={item}
            handleClick={this.props.handleClickButton}
            key={item}
          />
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }),
};
