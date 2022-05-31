import {useEffect, useState} from 'react';
import PokemonThumbnails from './utils/PokemonThumbnails';

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    setLoadMore(data.next)

    function createPokemonObject (result){
      result.forEach( async (pokemon)=>{
        console.log(pokemon)  
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList, data])
    })
  }
    createPokemonObject(data.results)
     console.log(allPokemons)
  }
   useEffect(() => {
  getAllPokemons()
 },[])

  return (
    <div className="app-container">
      <h1>Pokemon</h1>
      <div className="pokemon-container">
      <div className="all-container">
      {allPokemons.sort((a, b) => a.id > b.id ? 1 : -1).map((pokemon)  => 
        <PokemonThumbnails
          id = {pokemon.id}
          name = {pokemon.name}
          image = {pokemon.sprites.other.dream_world.front_default}
          type = {pokemon.types[0].type.name}
          //key = {index}
        />
      )}
      </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Carregar Mais</button>
      </div>
    </div>
  );
}

export default App;
