import { View, Text, Button,Image, Alert, ScrollView } from "react-native"
import { LoginPageStyles } from "./loginPage.styles"
import { useNavigation } from "@react-navigation/native"
import { TextField } from "../../components/TextField"
import { TextBlue } from "../../components/BlueText"
import { ButtonClick } from "../../components/ButtonClick"
import { ImageTop } from "../../components/ImageTop"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

export const LoginPage = ()=>{
    const navigation = useNavigation()
    const auth = getAuth();
    const [email, setEmail] = useState('ana@gmail.com')
    const [password, setPassword]= useState('ana123')

    const navigateToHome = (name)=>{
        
        navigation.navigate('Home', {name: name})
    }
    function handleEmail(e){
        setEmail(e)
    }

    function handlePassword(e){
        setPassword(e)
    }
    function handleTextClick(){
        navigation.navigate("RegisterPage")
    }
    function handleClick(){
        if(email && password){
            if(password.length > 5){
                signInWithEmailAndPassword(auth, email, password).then((userCredentials)=>{
                    const user = userCredentials.user
                    navigateToHome(user.displayName)
                }).catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message
                    Alert.alert(errorCode+"\n"+errorMessage)
                })
            }else{
                Alert.alert('A senha precisa ter mais que 5 caracteres!')
            }
        }else{
            Alert.alert("Preencha todos os campos para registrar-se")
        }
        
    }
    return(
        <ScrollView a style={{ backgroundColor:'red'}} contentContainerStyle={{ height:'100%',backgroundColor:'red', justifyContent:'center'}}>
            <View style={LoginPageStyles.loginPage}>
            <ImageTop/>
            <Text style={LoginPageStyles.title}>Welcome Back!</Text>
            <Image style={LoginPageStyles.imageCenter} source={require("../../../assets/account.png")}/>
            <TextField 
            value={email}
            onChange={handleEmail}
            secure={false} 
            label={"Email"} 
            placeholder={"mary.elliot@email.com"} 
            type={"email-address"}/>
            <TextField 
            value={password}
            onChange={handlePassword}
            secure={true} 
            label={"Password"} 
            placeholder={"***************"} 
            type={"default"}/>
            <View style={LoginPageStyles.rowText}>
                <TextBlue title="Forget Password?" />
            </View>
            <ButtonClick 
            onClick={handleClick}
            background={'#62D2C3'} 
            body={
            <View style={LoginPageStyles.rowTexts}>
                <Text style={LoginPageStyles.subTitlef}>Already have an account ?</Text>
                <TextBlue onClick={handleTextClick} title="Sign Up" />
            </View>} 
            title="Register"></ButtonClick>
        </View>
        </ScrollView>
    )
}