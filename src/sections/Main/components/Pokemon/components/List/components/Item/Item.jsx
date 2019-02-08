import React from 'react'

// The pokemon name is replaced -f and -m in order to get the images properly for Nidora-f and Nidora-M
const image = pokemon => {
  const lastTwoCharacters = pokemon.slice(-2)
  if (lastTwoCharacters === '-m') pokemon = pokemon.replace('-m', 'm')
  if (lastTwoCharacters === '-f') pokemon = pokemon.replace('-f', 'f')

  return `http://pokestadium.com/sprites/xy/${pokemon}.gif`
} 

const Item = ({ item }) => (
  <div>
    <div><img src={image(item.name)}/></div>
    <div>{item.name}</div>
  </div>
)

export default Item
