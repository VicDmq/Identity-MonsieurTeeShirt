import React, { useContext } from 'react'

import { store } from '../store'

import STYLES from './styles.less'

const ColorList = ({ colors }) => {
  const { dispatch } = useContext(store)

  const onSelect = color => {
    dispatch({ type: 'UPDATE_COLOR', color })
  }

  return (
    <div className={STYLES.list}>
      {colors.map((color, i) => (
        <div key={i} className={STYLES.listItem}>
          <div className={STYLES.id}>{color.idColor}</div>
          <div className={STYLES.name}>{color.name}</div>
          <div className={STYLES.hexa} style={{ color: color.hexa }}>
            {color.hexa}
          </div>
          <div className={STYLES.buttonContainer}>
            <button
              onClick={() => onSelect(color)}
              className={STYLES.selectButton}
            >
              Choisir
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ColorList
