import React, {useContext} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import {AuthContext} from './../context/AuthContext'
import {Controller, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup
      .string()
      .email("L'email resnseigné n'est pas valide")
      .required("L'email est requis"),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        'Le mot de passe doit contenir au moins 6 caractères, une majuscule, une miniscule, un nombre et un caractère spécial',
      ),
  });

const Inscription = (props) => {
    const {navigation} = props
    const {signUp} = useContext(AuthContext)
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })

    function registerUser(data) {
        signUp(data)
    }

    return (
        <View style={styles.container}>
            <View style={styles.brandZone}>
                <Text style={styles.brand}>BodyBuild</Text>
            </View>
            <Text style={styles.title}>Inscription</Text>
            <View style={styles.input}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        label="Email"
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        error={errors.password}
                        keyboardType="email-address"
                        placeholder="Adresse email"
                    />
                    )}
                    name="email"
                />
                
                {errors.email && (
                    <Text>{errors.email?.message}</Text>
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
                {errors.email && (
                  <View>
                    <Text>{errors.password?.message}</Text>
                  </View>
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
                        placeholder="Répétez mot de passe"
                    />
                    )}
                    name="password"
                />
                {errors.email && (
                  <View>
                    <Text>{errors.password?.message}</Text>
                  </View>
                )}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(registerUser)}>
                <Text style={styles.buttonTitle}>M'inscrire</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#272727",
        justifyContent:'center',
        alignItems:'center'
    },
    brandZone:{
        width:280,
        borderBottomWidth: 100,
        borderBottomColor: "#880C0C",
        borderLeftWidth: 50,
        borderLeftColor: "transparent",
        borderRightWidth: 50,
        borderRightColor: "transparent",
        borderStyle: "solid",
        justifyContent:'center',
        alignItems:'center'
    },
    brand:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        position:'absolute'
    },
    title:{
        color:'white',
        fontSize:18,
        marginVertical:20
    },
    input:{
        borderBottomWidth:3,
        borderBottomColor:"#880C0C",
        width:"80%",
        backgroundColor:'grey',
        marginVertical:15
    },
    button:{
        backgroundColor:"#880C0C",
        padding:15
    },
    buttonTitle:{
        color:'white',
        fontWeight:'bold'
    }
})

export default Inscription