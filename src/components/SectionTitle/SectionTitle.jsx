// import { Statistics } from '../Statistics/Statistics';
// import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'

export const Section = ({ title, options, onLeaveFeedback }) => {
  return (
    <div>
      <h1>{title}</h1>
      {/* <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        good={0}
        neutral={0}
        bad={0}
        total={0}
        positivePercentage={0}
      /> */}
    </div>
  );
};
