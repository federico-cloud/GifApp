import React from 'react'

export const GridItem = ({title, url}) => {
  return (
    <div className='card'>
        <a href={url} target="_blank"><img src={url} alt={`imagen de ${title}`}/></a>
    </div>
  )
}
