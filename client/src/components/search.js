import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])

  useEffect(() => {
    fetchGames()
  }, [])

  const fetchGames = async () => {
    let {data} = await axios.get('http://localhost:1337/api/games')
    console.log(data)
    setGames(data)
  }

  useEffect(() => {
    const searchedGames = games.filter(game => game.title.includes(searchTerm))
    setFilteredGames(searchedGames)
  }, [games, searchTerm])

  return (
    <div className='searchBoxAndResults'>
      <input
        type='text'
        onChange={(event) => setSearchTerm(event.target.value)}
    />
      {
        filteredGames.map(game => {
          return (
            <div><h2>{game.title + ' / ' + game.genre}</h2></div>
          )
        })
    }
    </div>
  )
}

export default Search