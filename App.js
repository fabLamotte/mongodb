import React, {useEffect, useState, useReducer, useMemo} from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

import { AuthContext } from './src/context/AuthContext'
import { GetActions } from './src/actions/AuthActions'
import { Reducer } from './src/reducers/Reducer'
import { GetApp } from './src/database/GetRealmApp'

import RootNavigation from './src/navigations/RootNavigation'

const App = () => {
  
  const [state, dispatch] = useReducer(Reducer, {
    isLoading: true,
    isSignout: false,
    userId: null,
  })

  const authContext = useMemo(() => {
    const app = GetApp()
    return GetActions(app, dispatch)
  }, [])

    return (
      <AuthContext.Provider value={authContext}>
        <RootNavigation userId={state.userId} />
      </AuthContext.Provider>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  input:{
    borderWidth:1,
    height:50,
    width:200,
    borderColor:'black'
  }
})

export default App
