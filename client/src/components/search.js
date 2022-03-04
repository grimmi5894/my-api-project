import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import GameInfo from './filteredGamesInfo'


const Search = () => {
  const [games, setGames] = useState([])
  const [game, setGame] = useState([{title: '',
    genre: '',
    yearReleased: 0,
    multiplayer: ''}])

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    let {data} = await axios.get('http://localhost:1337/api/games')
    console.log(data)
    setGames(data)
  }
  console.log(game)

  return (
    <div>
      {
        games.map(game => {
          return (
            <div>
              <button className='button' key={game.title} onClick={(event) => {
                setGame(event.target.value)
                alert(game.title + '\n' + game.genre + '\n' + game.yearReleased + '\n' + game.multiplayer)
                }}>{game.title}</button>

            </div>
          )
        })
      }
    </div>
  )
}

export default Search