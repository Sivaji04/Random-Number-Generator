// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }
  genrateNumber = () => {
    const rnumber = Math.ceil(Math.random() * 100)
    this.setState(() => ({
      count: rnumber,
    }))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-card">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            onClick={this.genrateNumber}
            type="button"
            className="generate-button"
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
