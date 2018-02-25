import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e, formField) {
    e.preventDefault();
    this.props.updateField(formField, e.target.value);
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
                <div className="form-radio-btns">
                  <label key={i}>
                    <input
                      type="radio"
                      className={radioButtonState}
                      onChange={e => this.handleChange(e, radioButtonState)}
                    />
                    {radioButton}
                  </label>
                </div>
              ))
            : null}

          {textFields
            ? textFields.map((field, i) => (
                <label key={i}>
                  {field}{' '}
                  <input
                    type="text"
                    id={textFieldStates[i]}
                    onChange={e => this.handleChange(e, textFieldStates[i])}
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
                onChange={e => this.handleChange(e, dateButtonState)}
              />
            </label>
          ) : null}
        </form>
      </div>
    );
  }
}

export default Question;
