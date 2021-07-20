import React from 'react'
import { Text } from 'react-native'
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Screens
import TodoNav from '../navigations/TodoNav'
import PhotoList from '../screens/PhotosList'

const Tab = createBottomTabNavigator()

const HomeNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="TodoNav">
                <Tab.Screen name="TodoNav" component={TodoNav} />
                <Tab.Screen name="PhotoList" component={PhotoList} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default HomeNavigation