import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import { GetApp } from './../database/GetRealmApp'
import OpenRealm from './../database/OpenRealmApp'
import { ObjectId } from 'bson'

const TodoNav = (props) => {
    const {
        navigation
    } = props

    const [todoName, setTodoName] = useState("")
    const [errorNameMessage,setErrorNameMessage] = useState("")
    const [descriptionTodo, setDescriptionTodo] = useState("")
    const [errorDescription, setErrorDescription] = useState("")

    const Check = () => {
        todoName == ""? setErrorNameMessage("Ce champs est requis") : setErrorNameMessage("")
        descriptionTodo == ""? setErrorDescription("Ce champs est requis") : setErrorDescription("")
        if(errorDescription == "" && errorNameMessage == ""){
            AddTask()
        }
    }

    const AddTask = async() => {
        const app = GetApp()
        const realm = await OpenRealm()
        realm.write(() => {
            let task = realm.create(
                "Task",
                {
                    _id: new ObjectId(),
                    _partition:app.currentUser.id,
                    name:todoName,
                    description: descriptionTodo,
                    status:false
                },
                'modified'
            )
            let user = realm.objectForPrimaryKey('User',ObjectId(app.currentUser.id))
            realm.create(
                'User',
                {
                    ...user,
                    _id:ObjectId(app.currentUser.id),
                    task:[...user.task, task]
                },
                'modified'
            )
        })
        navigation.navigate("TodoList")
    }

    return(
        <View style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.label}>Nom de la tâche</Text>
                <TextInput 
                    style={styles.inputField}
                    value={todoName}
                    onChangeText={(value) => setTodoName(value)}
                    onBlur={() => {
                        todoName == ""? setErrorNameMessage("Ce champs est requis") : setErrorNameMessage("")
                    }}
                    onFocus = {() => setErrorNameMessage("")}
                    autoFocus
                    placeholder="Nom"
                />
                {errorNameMessage? <Text style={styles.error}>{errorNameMessage}</Text> : null }
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Description</Text>
                <TextInput 
                    style={styles.inputField}
                    value={descriptionTodo}
                    onChangeText={(value) =>setDescriptionTodo(value)}
                    onBlur={() => {
                        descriptionTodo == ""? setErrorDescription("Ce champs est requis") : setErrorDescription("")
                    }}
                    onFocus = {() => setErrorDescription("")}
                    placeholder="Donnez une description à votre tâche"
                />
                {errorDescription? <Text style={styles.error}>{errorDescription}</Text> : null }
            </View>
            <View style={styles.submitZone}>
                <TouchableOpacity style={styles.submitButton} onPress={() => Check()}>
                    <Text style={styles.textButton}>Ajouter la tâche</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:'80%',
        borderBottomWidth:1,
        borderBottomColor:'black',
        justifyContent:'center',
        alignItems:'flex-start',
        marginVertical:10
    },
    inputField:{
        width:'100%',
    },
    label:{
        textAlign:'left'
    },
    error:{
        color:'red',
        fontWeight:'bold',
        paddingVertical:10
    },
    submitZone:{
        height:50,
        width:200
    },
    submitButton:{
        height:50,
        width:200,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        color:'white',
        fontWeight:'bold'
    }
})

export default TodoNav