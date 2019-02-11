// The pokemon name is replaced -f and -m in order to get the images properly for Nidora-f and Nidora-M
export const image = pokemon => {
  const lastTwoCharacters = pokemon.slice(-2)
  if (lastTwoCharacters === '-m') pokemon = pokemon.replace('-m', 'm')
  if (lastTwoCharacters === '-f') pokemon = pokemon.replace('-f', 'f')

  return `http://pokestadium.com/sprites/xy/${pokemon}.gif`
}

export const parsePokemonData = data => {
  return {
    name: data.name,
    id: data.id,
    type: data.types[0].type.name,
    height: data.height,
    habilities: data.abilities.map(abilityObj => abilityObj.ability.name)
  }
}
