import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;

  return (
    <div className='w-48 pr-2'>
      <img alt='movie_card' src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard