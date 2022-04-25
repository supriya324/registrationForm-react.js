import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    showfirstnameErrorMsg: false,
    showlastnameErrormsg: false,
    isSubmitForm: false,
  }

  changeFirstName = event => {
    const {target} = event
    const {value} = target
    this.setState({firstNameInput: value})
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state
    return firstNameInput !== ''
  }

  onBlurFirstName = () => {
    const isvalidFirstName = this.validateFirstName()
    this.setState({showfirstnameErrorMsg: !isvalidFirstName})
  }

  renderFirstName = () => {
    const {showfirstnameErrorMsg, firstNameInput} = this.state

    const className = showfirstnameErrorMsg
      ? 'name-input-field error-text'
      : 'name-input-field'

    return (
      <div className="firstInput-container">
        <label className="firstname-text" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          className="input-text"
          id="FirstName"
          placeholder="First name"
          value={firstNameInput}
          onChange={this.changeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }

  changeLastName = event => {
    const {target} = event
    const {value} = target
    this.setState({lastNameInput: value})
  }

  validateLastName = () => {
    const {lastNameInput} = this.state
    return lastNameInput !== ''
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showlastnameErrormsg: !isValidLastName})
  }

  renderLastName = () => {
    const {lastNameInput, showlastnameErrormsg} = this.state
    const className = showlastnameErrormsg
      ? 'name-input-field error-text'
      : 'name-input-field'

    return (
      <div className="lastInput-container">
        <label className="lastname-text" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          className="input-text"
          placeholder="Last name"
          id="LastName"
          value={lastNameInput}
          onChange={this.changeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onsubmitForm = event => {
    event.preventDefault()
    const isvalidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    if (isvalidFirstName && isValidLastName) {
      this.setState({isSubmitForm: true})
    } else {
      this.setState({
        showfirstnameErrorMsg: !isvalidFirstName,
        showlastnameErrormsg: !isValidLastName,
        isSubmitForm: false,
      })
    }
  }

  SubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmitForm: !prevState.isSubmitForm,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmitFormSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-paragraph"> Submitted Successfully </p>
      <button
        className="submit-another-button"
        type="button"
        onClick={this.SubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  RegistrationForm = () => {
    const {showfirstnameErrorMsg, showlastnameErrormsg} = this.state

    return (
      <form className="register-container" onClick={this.onsubmitForm}>
        {this.renderFirstName()}
        {showfirstnameErrorMsg && <p className="error-text"> Required </p>}
        {this.renderLastName()}
        {showlastnameErrormsg && <p className="error-text"> Required </p>}

        <button className="button" type="button">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isSubmitForm} = this.state
    return (
      <div className="app-container">
        <h1 className="heading"> Registration </h1>
        <div className="container">
          {isSubmitForm
            ? this.renderSubmitFormSuccess()
            : this.RegistrationForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
