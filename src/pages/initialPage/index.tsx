import { View, Text, Image, SafeAreaView, Button } from "react-native"
import { InitialPageStyles } from "./initialPage.styles"
import { ButtonClick } from "../../components/ButtonClick"
import { ImageTop } from "../../components/ImageTop"

export const InitialPage = ()=>{
    return(
        <SafeAreaView style={InitialPageStyles.container}>
            <View style={InitialPageStyles.initialPage}>
                <ImageTop/>
                <Image style={InitialPageStyles.imageCenter} source={require("../../../assets/celular.png")}/>
                <Text style={InitialPageStyles.title}>Get things done with TODO</Text>
                <Text style={InitialPageStyles.subTitle}>this app it's really good for who is trying to organize your taks</Text>
                <ButtonClick background={"#62D2C3"} title={"Get Started"}
                ></ButtonClick>
            </View>
        </SafeAreaView>
    )
}