import React from "react"

const GameInfo = (props) => {
  const title = props.game.title
  const genre = props.game.genre
  const yearReleased = props.game.yearReleased
  const multiplayer = props.game.multiplayer

  return (
    <div>
      <h2>{title}</h2>
      <p>{genre}</p>
      <p>{yearReleased}</p>
      <p>{multiplayer}</p>
    </div>
  )
}

export default GameInfo