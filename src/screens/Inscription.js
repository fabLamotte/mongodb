import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const Inscription = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [error, setError] = useState("")

    const inscription = (props) =>{
        const {
            navigation
        } = props
        if(email != '' && password != '' && passwordConfirm != ''){
            if(password == passwordConfirm){
                if(password.length > 6 && password < 128){
                    const realm = await openRealmApp()
                    const users = realm.objects("users")
                    const isExist = users.filtered("name != " + email)
                    if(!isExist){
                        app.emailPasswordAuth.registerUser(email, password)
                        navigation.navigate("Connexion")
                    } else {
                        setError("Email déjà utilisé")
                    }
                } else {
                    setError("Votre mot de passe doit faire entre 6 et 128 caractères")
                }
            } else {
                setError("Les mots de passes ne sont pas identiques")
            }
        } else {
            setError("Il y a des champs vides")
        }
        // Connexion 
    }

    return (    
        <View>
            <Text style={styles.title}>
                Inscription
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
                <Text>Répétez mot de passe : </Text>
                <TextInput 
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm}
                    style={styles.input}
                />
            </View>
            <View style={styles.bloc}>
                <TouchableOpacity style={styles.button} onPress={inscription}>
                    <Text style={styles.titleButton}>Valider</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.error}>{error?error:null}</Text>
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
    },
    error:{
        color:'red',
        fontWeight:'bold'
    }
})
export default Inscription