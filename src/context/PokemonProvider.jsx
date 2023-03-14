import React from 'react'
import { PokemonContext } from '.'

function PokemonProvider({ children }) {
  return (
    <PokemonContext.Provider value={{
      x: 10,
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider