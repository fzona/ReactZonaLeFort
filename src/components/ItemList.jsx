import React from 'react'
import Item from './Item'

export default function ItemList({camisetas}) {
  return (
        <div>
            {camisetas.map((camiseta) => (<Item key={camiseta.id} camisetas={camiseta}/>))}
        </div>
  )
}
