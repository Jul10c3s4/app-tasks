import { View, Text, ScrollView,Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { RegisterStyles } from "./register.styles"
import { TextField } from "../../components/TextField"
import { ButtonClick } from "../../components/ButtonClick"
import { TextBlue } from "../../components/BlueText"
import { ImageTop } from "../../components/ImageTop"

export const RegisterPage = ()=>{
    const navigation = useNavigation()

    const navigateToHome = ()=>{
        navigation.navigate("Home" as never)
    }
    return(
            <View style={RegisterStyles.registerPage}>
            <ImageTop/>
            <Text style={RegisterStyles.title}>Welcome Onboard!</Text>
            <Text style={RegisterStyles.subTitle}>Lets help you in completing your tasks</Text>
            <TextField 
            secure={false} 
            label={"full name"} 
            placeholder={"Mary Elliot"} 
            type={"default"}/>
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
            <TextField 
            secure={true} 
            label={"Confirm Password"} 
            placeholder={"***************"} 
            type={"default"}/>
            <ButtonClick 
            background={'#62D2C3'} 
            body={
            <View style={RegisterStyles.textRow}>
                <Text style={RegisterStyles.subTitlef}>Already have an account ?</Text>
                <TextBlue title="Sign Up" />
            </View>} 
            title="Register"></ButtonClick>
            </View>
    )
}