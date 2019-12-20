import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { store } from '../store'

import STYLES from './styles.less'

const Layout = ({ children }) => {
  const { state } = useContext(store)

  return (
    <div>
      <div className={STYLES.header}>
        <Link to='/'>Produits</Link>
        <Link to='/colors'>Couleurs</Link>
        <Link to='/confirmation'>Confirmation</Link>
        {state.product && (
          <div className={STYLES.selectedProduct}>
            Produit séléctionné: {state.product.name}
          </div>
        )}
        {state.color && (
          <div className={STYLES.selectedProduct}>
            Couleur séléctionnée: {state.color.name}
          </div>
        )}
      </div>
      <div className={STYLES.content}>{children}</div>
    </div>
  )
}

export default Layout
