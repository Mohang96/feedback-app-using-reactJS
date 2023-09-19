import './index.css'

const EmojiItem = props => {
  const {emojiDetails, onHappyEmojiClicked} = props
  const {imageUrl, name} = emojiDetails

  const happyEmojiClicked = () => {
    onHappyEmojiClicked(name)
  }

  return (
    <li>
      <img
        src={imageUrl}
        alt={name}
        className="emoji-image"
        onClick={happyEmojiClicked}
      />
      <p className="emoji-type">{name}</p>
    </li>
  )
}

export default EmojiItem
