import React, { useContext } from 'react'

import { store } from '../store'

import STYLES from './styles.less'

const ProductList = ({ products }) => {
  const { dispatch } = useContext(store)

  const onSelect = product => {
    dispatch({ type: 'UPDATE_PRODUCT', product })
  }

  return (
    <div className={STYLES.list}>
      {products.map((product, i) => (
        <div key={i} className={STYLES.listItem}>
          <div className={STYLES.id}>{product.idProduct}</div>
          <div className={STYLES.name}>{product.name}</div>
          <div
            onClick={() => onSelect(product)}
            className={STYLES.buttonContainer}
          >
            <button className={STYLES.selectButton}>Choisir</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
