import React from 'react';
import css from './StatisticItem.module.css';
import PropTypes from 'prop-types';

export const StatisticItem = ({ feedback, count }) => {
  return (
    <p className={css.item}>
      <span className={css.feedback}> {feedback}: </span> <span> {count}</span>{' '}
    </p>
  );
};

StatisticItem.propTypes = {
  feedback: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
