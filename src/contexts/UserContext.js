import React,{ createContext, useReducer } from 'react'


export const UserContext = createContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}