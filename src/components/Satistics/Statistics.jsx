import React from 'react';
import css from './Satistics.module.css';
import { StatisticItem } from '../StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const Statistics = ({ feedback, countTotalFeedback }) => {
  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((feedback.good / countTotalFeedback()) * 100)}% `;
  };

  return (
    <div className={css.section}>
      {Object.entries(feedback).map(([feedback, count]) => (
        <StatisticItem feedback={feedback} count={count} key={feedback} />
      ))}
      <StatisticItem feedback={'Total'} count={countTotalFeedback()} />
      <StatisticItem
        feedback={'Positive feedback'}
        count={countPositiveFeedbackPercentage()}
      />
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  feedback: PropTypes.object.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
};
