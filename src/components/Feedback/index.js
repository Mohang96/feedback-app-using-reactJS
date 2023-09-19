import {Component} from 'react'
import EmojiItem from '../EmojiItem'
import './index.css'

class Feedback extends Component {
  state = {isHappyEmojiClicked: false}

  onHappyEmojiClicked = () => {
    this.setState({isHappyEmojiClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isHappyEmojiClicked} = this.state

    return (
      <div className="background">
        {isHappyEmojiClicked && (
          <div className="feedback-rating-card">
            <img
              src={loveEmojiUrl}
              alt="love emoji"
              className="love-emoji-image"
            />
            <h1 className="thankyou-text">Thank You</h1>
            <p className="feedback-description">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
        {!isHappyEmojiClicked && (
          <div className="performance-rating-card">
            <h1 className="rating-description">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <EmojiItem
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onHappyEmojiClicked={this.onHappyEmojiClicked}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
