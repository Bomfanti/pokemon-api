export const 

{allPokemons.sort((a, b) => a.id > b.id ? 1 : -1).map((pokemon, index)  => 
    <PokemonThumbnails
      id = {pokemon.id}
      name = {pokemon.name}
      image = {pokemon.sprites.other.dream_world.front_default}
      type = {pokemon.types[0].type.name}
      //key = {index}
    />
  )}

  export default; 