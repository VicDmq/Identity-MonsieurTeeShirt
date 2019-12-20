import React, { useContext } from 'react'

import { store } from '../store'

const ConfirmationPage = () => {
  const { state } = useContext(store)

  const selectedProduct = state.product
    ? `(${state.product.idProduct}) ${state.product.name}`
    : 'Aucun'

  const selectedColor = state.color
    ? `(${state.color.idColor}) ${state.color.name} - ${state.color.hexa}`
    : 'Aucun'

  return (
    <div>
      <div>Produit sélectionné : {selectedProduct}</div>
      <div>Couleur séléctionné : {selectedColor}</div>
    </div>
  )
}

export default ConfirmationPage
