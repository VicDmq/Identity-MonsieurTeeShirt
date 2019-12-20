import React, { createContext, useReducer } from 'react'

const initialState = {}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const newState = state

    switch (action.type) {
      case 'UPDATE_PRODUCT':
        newState.product = action.product
        break
      case 'UPDATE_COLOR':
        newState.color = action.color
        break
      default:
        return state
    }
    return newState
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
