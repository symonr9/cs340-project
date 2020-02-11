import React from 'react'

export const useBool = (initValue = false) => {
  const [state, setState] = React.useState(initValue)
  return {
    val: state,
    toggleVal: () => {
      setState(!state)
    }
  }
}
