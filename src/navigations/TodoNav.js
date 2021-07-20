import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TodoList from '../screens/TodoList'
import NewToDo from '../components/NewTodo'

const Stack = createStackNavigator()

const TodoNav = () => {

    return(
        <Stack.Navigator initialRouteName="TodoList">
            <Stack.Screen name="TodoList" component={TodoList} />
            <Stack.Screen name="NewToDo" component={NewToDo} />
        </Stack.Navigator>
    )
}

export default TodoNav