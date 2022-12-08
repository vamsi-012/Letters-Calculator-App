// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersCount: 0,
  }

  onChangeSearchInput = () => {
    this.setState(prevState => ({lettersCount: prevState.lettersCount + 1}))
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="app-container">
        <div className="description-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="input-label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input"
            id="input"
            onChange={this.onChangeSearchInput}
          />
          <div className="count-container">
            <p>No.of letters: {lettersCount}</p>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
