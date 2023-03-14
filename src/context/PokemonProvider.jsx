import React, { createContext } from 'react'

export const PokemonContext = createContext()

export function PokemonProvider({ children }) {
  return (
    <PokemonContext.Provider value={{
      x: 10,
    }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider