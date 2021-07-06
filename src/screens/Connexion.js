import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const Connexion = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const connexion = () => {
        console.log("Connexion")
        // Verification input
            // Verification user existe
        // Connexion
    }

    return (    
        <View>
            <Text style={styles.title}>
                Connexion
            </Text>
            <View style={styles.bloc}>
                <Text>Votre adresse de messagerie : </Text>
                <TextInput 
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
            </View>
            <View style={styles.bloc}>
                <Text>Votre mot de passe : </Text>
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
            </View>
            <View style={styles.bloc}>
                <TouchableOpacity style={styles.button} onPress={connexion}>
                    <Text style={styles.titleButton}>Valider</Text>
                </TouchableOpacity>
            </View>
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
        width:400
    },
    title:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center'
    },
    button:{
        backgroundColor:'green',
        height:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
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
    }
})

export default Connexion