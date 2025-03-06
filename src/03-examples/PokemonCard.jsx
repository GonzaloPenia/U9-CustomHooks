import React, { useState } from 'react'

export const PokemonCard = ( { id, name, sprites = [] } ) => {
  
    const [pokemon, setPokemon] = useState()
    
    setPokemon

  return (
  <>
  
  <div>PokemonCard</div>
  <section>

    <h2 className="text-capitalize">

        #{id} - {name}

        <div>
            {
            sprites.map(sprite => ( <img key={sprite} src={sprite} alt={name} />  ))
            }
        </div>

    </h2>
  </section>
  
  </>
  )
}
