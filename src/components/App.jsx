import React, { Component } from 'react';
import { Section } from '../components/SectionTitle/SectionTitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleClickGood = evt => {
    const { name } = evt.target;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState({ total: this.state.total + 1 });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: (prevState.good / prevState.total) * 100,
    }));
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
        <Section
          title="Please leave feedback"
          // options={this.state}
          // onLeaveFeedback={this.handleClickGood}
        />
        {/* <h1>Please leave feedback</h1> */}
        <button name="good" type="button" onClick={this.handleClickGood}>
          Good
        </button>
        <button name="neutral" type="button" onClick={this.handleClickGood}>
          Neutral
        </button>
        <button name="bad" type="button" onClick={this.handleClickGood}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage.toFixed()}%</p>
      </div>
    );
  }
}
