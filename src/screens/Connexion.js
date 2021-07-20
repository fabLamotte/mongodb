import React, {useContext, useEffect, useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native'

import {AuthContext} from './../context/AuthContext'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import AsyncStorage from '@react-native-async-storage/async-storage'

const schema = yup.object().shape({
    email: yup
      .string()
      .email("L'email resnseigné n'est pas valide"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'Le mot de passe doit contenir au moins 6 caractères, une majuscule, une miniscule, un nombre et un caractère spécial',
      ),
  })

const Connexion = (props) => {
    const {
        handleSubmit,
        control,
        setValue,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })
    const {signIn} = useContext(AuthContext)

    // Fonction de gestion du submit
    const onSignIn = async(data) => {
        try{
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('user', jsonValue)
        } catch(e){
            console.log(e)
        }
        signIn(data)
    }

    // Fonction récupération données de AsyncStorage
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('user')
          const parsedValue = JSON.parse(jsonValue)
          if(parsedValue){
            setValue('email' , parsedValue.email)
            setValue('password' , parsedValue.password)
          }
        } catch(e) {
          // error reading value
        }
    }

    // Récupération des données de AsyncStorage au chargement de la page
    useEffect(() => {
        getData()
    })
    
    return (    
        <View style={styles.container}>
            <View style={styles.brandZone}>
                <Text style={styles.brand}>TodoList</Text>
            </View>
            <Text style={styles.title}>Connexion</Text>
            <View style={styles.input}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            label="Email"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={errors.email}
                            keyboardType="email-address"
                            placeholder="Adresse email"
                        />
                    )}
                    name="email"
                />
                {errors.email && (
                    <Text style={styles.textError}>{errors.email?.message}</Text>
                )}
            </View>
            <View style={styles.input}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                        <TextInput
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={errors.password}
                            secureTextEntry={true}
                            passwordRules="minlength: 20; required: lower; required: upper; required: digit; required: [-];"
                            placeholder="Mot de passe"
                        />
                    )}
                    name="password"
                />
                {errors.password && (
                    <Text style={styles.textError}>{errors.password?.message}</Text>
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSignIn)}>
                <Text style={styles.titleButton}>Me connecter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        height:50,
        width:'70%',
        margin:10,
    },
    title:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center'
    },
    button:{
        backgroundColor:'green',
        height:50,
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },
    titleButton:{
        color:'white', 
        fontWeight:'bold',
        fontSize:20
    },
    bloc:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
    },
    textError:{
        color:'red'
    }
})

export default Connexion