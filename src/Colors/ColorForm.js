import React from 'react'

import STYLES from './styles.less'

const ColorForm = ({
  nameValue,
  onNameChange,
  hexaValue,
  onHexaChange,
  createColor
}) => {
  return (
    <div className={STYLES.form}>
      <input
        onChange={onNameChange}
        value={nameValue}
        placeholder='Nom de la couleur'
      />
      <input
        onChange={onHexaChange}
        value={hexaValue}
        placeholder='Code Hexa'
      />
      <button onClick={createColor}>Créer</button>
    </div>
  )
}

export default ColorForm
