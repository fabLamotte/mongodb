import React from 'react'
// React native
import {View, Text} from 'react-native'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import Connexion from './../screens/Connexion'
import Inscription from './../screens/Inscription'

const Tab = createBottomTabNavigator()

const AuthNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Connexion">
                <Tab.Screen name="Connexion" component={Connexion} />
                <Tab.Screen name="Inscription" component={Inscription} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation