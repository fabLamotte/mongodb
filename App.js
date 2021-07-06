import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import openRealmApp from './src/database/OpenRealmApp'
import {ObjectId} from 'bson'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Connexion from './src/screens/Connexion'
import Inscription from './src/screens/Inscription'

const Tab = createBottomTabNavigator()

const App = () => {
  // const valid = async() => {
  //   const realm = await openRealmApp()
  //   realm.write(() => {
  //     const user = realm.create("users", {
  //       _id: new ObjectId(),
  //       name: "Fabien",
  //     })
  //   })
  // }

  // useEffect(async() => {
  //   const realm = await openRealmApp()
  //   const usersContainer = realm.objects("users")
  //   console.log(usersContainer)
  // })

    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Connexion">
          <Tab.Screen name="Connexion" component={Connexion} />
          <Tab.Screen name="Inscription" component={Inscription} />
        </Tab.Navigator>
      </NavigationContainer>
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
