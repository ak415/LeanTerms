import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  handleTextChange(e, textField) {
    e.preventDefault();
    this.props.updateTextField(textField, e.target.value);
  }

  handleRadioButtonSelect(e) {
    e.preventDefault();
    this.props.updateRadio();
  }

  handleDateSelect(e) {
    e.preventDefault();
    this.props.updateDate();
  }

  render() {
    const {
      title,
      subtitle,
      body,
      radioButtons,
      textFields,
      textFieldStates,
      radioButtonState,
      dateField,
      dateButtonState
    } = this.props.question;
    return (
      <div className="wrap-contract-navigation">
        <form className="contract-form">
          <h2>{title}</h2>
          {subtitle ? <p>{subtitle}</p> : null}
          <p>{body}</p>

          {radioButtons
            ? radioButtons.map((radioButton, i) => (
                <label key={i}>
                  {radioButton}
                  <input
                    type="radio"
                    className={radioButtonState}
                    onChange={e => this.handleRadioButtonSelect(e)}
                  />
                </label>
              ))
            : null}

          {textFields
            ? textFields.map((field, i) => (
                <label key={i}>
                  {field}{' '}
                  <input
                    type="text"
                    id={textFieldStates[i]}
                    onChange={e => this.handleTextChange(e, textFieldStates[i])}
                  />
                </label>
              ))
            : null}

          {dateField ? (
            <label>
              {dateField}
              <input
                type="date"
                id={dateButtonState}
                onChange={e => this.handleDateSelect(e)}
              />
            </label>
          ) : null}
        </form>
      </div>
    );
  }
}

export default Question;
