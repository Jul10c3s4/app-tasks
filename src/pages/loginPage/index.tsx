import { View, Text, Button,Image } from "react-native"
import { LoginPageStyles } from "./loginPage.styles"
import { useNavigation } from "@react-navigation/native"
import { TextField } from "../../components/TextField"
import { TextBlue } from "../../components/BlueText"
import { ButtonClick } from "../../components/ButtonClick"
import { ImageTop } from "../../components/ImageTop"

export const LoginPage = ()=>{
    const navigation = useNavigation()

    const navigateToHome = ()=>{
        navigation.navigate("Home" as never)
    }
    return(
        <View style={LoginPageStyles.loginPage}>
            <ImageTop/>
            <Text style={LoginPageStyles.title}>Welcome Back!</Text>
            <Image style={LoginPageStyles.imageCenter} source={require("../../../assets/account.png")}/>
            <TextField 
            secure={false} 
            label={"Email"} 
            placeholder={"mary.elliot@email.com"} 
            type={"email-address"}/>
            <TextField 
            secure={true} 
            label={"Password"} 
            placeholder={"***************"} 
            type={"default"}/>
            <View style={LoginPageStyles.rowText}>
                <TextBlue title="Forget Password?" />
            </View>
            <ButtonClick 
            background={'#62D2C3'} 
            body={
            <View style={LoginPageStyles.rowTexts}>
                <Text style={LoginPageStyles.subTitlef}>Already have an account ?</Text>
                <TextBlue title="Sign Up" />
            </View>} 
            title="Register"></ButtonClick>
        </View>
    )
}