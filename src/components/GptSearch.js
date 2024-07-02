import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { NETFLIX_BACKGROUND } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover sm:w-screen md:w-screen"
          src={NETFLIX_BACKGROUND}
          alt="bg-photo"
        />
      </div>
        <div className=''>
            <GptSearchBar/>
            <GptMovieSuggestion/>
        </div>
    </div>
  )
}

export default GptSearch