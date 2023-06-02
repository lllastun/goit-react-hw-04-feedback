import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import React, { useState, useEffect } from 'react';
import Statistics from './Satistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    bad: 0,
    neutral: 0,
    good: 0,
  });

  useEffect(() => {
    countTotalFeedback();
  });

  const countTotalFeedback = () => {
    return feedback.bad + feedback.neutral + feedback.good;
  };

  const handleClickButton = e => {
    e.preventDefault();
    const { name } = e.target;
    if (!(e.target && e.target.name)) return;
    setFeedback(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const listKeys = Object.keys(feedback);
  const Section = ({ title, children }) => (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flexStart',
        textAlign: 'left',
        marginLeft: '20px',
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleClickButton={handleClickButton}
          data={listKeys}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            feedback={feedback}
            countTotalFeedback={countTotalFeedback}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

export default App;
