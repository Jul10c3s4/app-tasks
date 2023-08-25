import { View, Text, ScrollView,Image, Alert, Touchable, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RegisterStyles } from "./register.styles"
import { TextField } from "../../components/TextField"
import { ButtonClick } from "../../components/ButtonClick"
import { TextBlue } from "../../components/BlueText"
import { ImageTop } from "../../components/ImageTop"
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import { useState } from "react"

export const RegisterPage = ()=>{
    const navigation = useNavigation()

    const auth = getAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [confPassword, setConfPassword]= useState('')
    const [userName, setUserName] = useState('')
    
    const navigateToLoginPage = ()=>{
        navigation.navigate("LoginPage" as never)
    }
    function handleEmail(e:any){
        setEmail(e)
    }

    function handlePassword(e:any){
        setPassword(e)
    }
    function handleConfPassword(e:any){
        setConfPassword(e)
    }
    function handleName(e:any){
        setUserName(e)
    }
    function handleClick(){
        if(userName && email && password){
            if(password.length > 5){
                if(password === confPassword){
                    createUserWithEmailAndPassword(auth, email, password).then((userCredentials)=>{
                        const user = userCredentials.user 
                        updateProfile(user, {displayName: userName})
                        Alert.alert("Usuário cadastrado com sucesso!")
                        navigateToLoginPage()
                    }).catch((error)=>{
                        const errorCode = error.code;
                        const errorMessage = error.message
                        Alert.alert(errorCode+"\n"+errorMessage)
                    })
                }else{
                    Alert.alert("Confirmação de senha está incorreta!")
                }
            }else{
                Alert.alert('A senha precisa ter mais que 5 caracteres!')
            }
        }else{
            Alert.alert("Preencha todos os campos para registrar-se")
        }
    }
    return(
            <View style={RegisterStyles.registerPage}>
            <ImageTop/>
            <TouchableOpacity style={{position: 'absolute',
            top: 40,
            left: 20,
            zIndex: 50,}} onPress={navigation.goBack}>
            <Image style={{
            width: 40,
            height:30
            }} source={require("../../../assets/arrow.png")}/>
            </TouchableOpacity>
            <Text style={RegisterStyles.title}>Welcome Onboard!</Text>
            <Text style={RegisterStyles.subTitle}>Lets help you in completing your tasks</Text>
            <TextField 
            secure={false} 
            value={userName}
            onChange={handleName}
            label={"full name"} 
            placeholder={"Mary Elliot"} 
            type={"default"}/>
            <TextField 
            secure={false} 
            value={email}
            onChange={handleEmail}
            label={"Email"} 
            placeholder={"mary.elliot@email.com"} 
            type={"email-address"}/>
            <TextField 
            secure={true} 
            value={password}
            onChange={handlePassword}
            label={"Password"} 
            placeholder={"***************"} 
            type={"default"}/>
            <TextField 
            secure={true}
            value={confPassword}
            onChange={handleConfPassword} 
            label={"Confirm Password"} 
            placeholder={"***************"} 
            type={"default"}/>
            <ButtonClick
            onClick={handleClick} 
            background={'#62D2C3'} 
            body={
            <View style={RegisterStyles.textRow}>
                <Text style={RegisterStyles.subTitlef}>Already have an account ?</Text>
                <TextBlue onClick={navigateToLoginPage} title="Sign In" />
            </View>} 
            title="Register"></ButtonClick>
            </View>
    )
}