import React from 'react';
import Question from './question';
import ProgressBar from './progress_bar';
import ContractFormNavigation from './contact_form_navigation';
import Questions from '../utils/questions';

class Contract extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentQuestionIdx: 0 };
    this.totalNumQuestions = Questions.length;
    this.updateField = this.updateField.bind(this);
    this.navigateToQuestion = this.navigateToQuestion.bind(this);
  }

  navigateToQuestion(idx) {
    this.setState({ currentQuestionIdx: idx });
  }

  updateField(formField, value) {
    this.setState({ [formField]: value }, () => {
      console.log(this.state);
    });
  }

  handleArrow(direction) {
    const { currentQuestionIdx } = this.state;

    if (direction === 'prev') {
      if (this.state.currentQuestionIdx === 0) return;
      this.setState({ currentQuestionIdx: currentQuestionIdx - 1 });
    } else {
      if (currentQuestionIdx === this.totalNumQuestions - 1) return;
      this.setState({ currentQuestionIdx: currentQuestionIdx + 1 });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    let question = Questions[this.state.currentQuestionIdx];

    return (
      <div className="contract-form-wrapper">
        <div id="question-navigation-container">
          <div id="contract-form-left-container">
            <div className="contract-title">
              <h1>California Residential Lease Agreement</h1>
            </div>
            <ProgressBar
              progress={this.state.currentQuestionIdx}
              totalWidth={this.totalNumQuestions}
            />
            <div className="buttons">
              <button
                type="button"
                onClick={() => this.handleArrow('prev')}
                className="prvbtn"
              >
                <i id="prv-icon" className="fa fa-arrow-left" />Previous
              </button>

              {this.state.currentQuestionIdx === this.totalNumQuestions - 1 ? (
                <button
                  type="button"
                  onClick={e => this.handleSubmit(e)}
                  className="nextbtn"
                >
                  Submit
                  <i id="next-icon" className="fa fa-arrow-right" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => this.handleArrow('next')}
                  className="nextbtn"
                >
                  Next
                  <i id="next-icon" className="fa fa-arrow-right" />
                </button>
              )}
            </div>
            <Question question={question} updateField={this.updateField} />
          </div>
          <ContractFormNavigation
            currentQuestionIdx={this.state.currentQuestionIdx}
            navigateToQuestion={this.navigateToQuestion}
          />
        </div>
      </div>
    );
  }
}

export default Contract;
