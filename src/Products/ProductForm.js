import React from 'react'

import STYLES from './styles.less'

const ProductForm = ({ nameValue, onNameChange, createProduct }) => {
  return (
    <div className={STYLES.form}>
      <input
        onChange={onNameChange}
        value={nameValue}
        placeholder='Nom du produit'
      />
      <button onClick={createProduct}>Créer</button>
    </div>
  )
}

export default ProductForm
