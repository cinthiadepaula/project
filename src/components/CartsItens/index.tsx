import React from 'react'
import Itens from '../Itens'

const CartsItens = ({ cart }) => {
  return (
    <footer>
      <ul>

        {cart.map((cartItem, index) => <Itens key={index} />)}
        
        
      </ul>
    </footer>
  )
}

export default CartsItens