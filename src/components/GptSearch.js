import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div>
        <div className="fixed -z-10">
        <img
          className="bg-gradient-to-b from-black"
          src={NETFLIX_BACKGROUND}
          alt="bg-photo"
        />
      </div>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    </div>
  )
}

export default GptSearch