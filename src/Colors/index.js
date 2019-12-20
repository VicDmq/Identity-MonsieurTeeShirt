import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'

import ColorList from './ColorList'
import ColorForm from './ColorForm'

const GET_COLORS = gql`
  {
    getColors {
      idColor
      name
      hexa
    }
  }
`

const ADD_COLOR = gql`
  mutation addColor($name: String!, $hexa: String!) {
    addColor(name: $name, hexa: $hexa) {
      idColor
      name
      hexa
    }
  }
`

const ColorPage = () => {
  const [newColorName, setNewColorName] = useState()
  const [newColorHexa, setNewColorHexa] = useState()

  const { loading, error, data } = useQuery(GET_COLORS)
  const [addColor] = useMutation(ADD_COLOR, {
    update (cache, { data: { addColor } }) {
      const { getColors } = cache.readQuery({ query: GET_COLORS })
      cache.writeQuery({
        query: GET_COLORS,
        data: { getColors: getColors.concat([addColor]) }
      })
    }
  })

  const onNameChange = e => {
    setNewColorName(e.target.value)
  }

  const onHexaChange = e => {
    setNewColorHexa(e.target.value)
  }

  const createColor = () => {
    addColor({ variables: { name: newColorName, hexa: newColorHexa } })
    setNewColorName(undefined)
    setNewColorHexa(undefined)
  }

  if (loading) return 'Chargement...'
  if (error) return 'Erreur...'

  return (
    <div>
      <ColorList colors={data.getColors} />
      <ColorForm
        nameValue={newColorName}
        onNameChange={onNameChange}
        hexaValue={newColorHexa}
        onHexaChange={onHexaChange}
        createColor={createColor}
      />
    </div>
  )
}

export default ColorPage
