import React, {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {AuthContext} from './../context/AuthContext'
import { createStackNavigator } from '@react-navigation/stack'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers'

const Stack = createStackNavigator()

const TodoList = (props) => {
    const {
        navigation
    } = props

    const {signOut} = useContext(AuthContext)

    return(
        <View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewToDo')}>
                    <Text style={styles.textButton}>Ajouter une tâche</Text>
                </TouchableOpacity>
            </View>
            <Text>Vous n'avez pas encore de tâche en attente</Text>










            {/* <TouchableOpacity style={styles.button} onPress={signOut}>
                <Text style={styles.textButton}>Déconnexion</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    button:{
        height:50,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    textButton:{
        color:'white',
        fontWeight:'bold'
    }
})

export default TodoList