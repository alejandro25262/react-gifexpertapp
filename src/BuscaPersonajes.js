import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const BuscaPersonajes = () => {

  const [categories, setCategories] = useState(['Dragon ball'])

  return (
    <>
      <h2>Busca tu personaje</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />



      <ol>
        {
          categories.map( (catoegory) => (
            <GifGrid
            key={catoegory}
            category={catoegory}

            />
          ))
         }
      </ol>
    </>
  )
}
