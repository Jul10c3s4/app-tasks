import { StyleSheet } from "react-native"

export const TextFieldStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        width: "90%",
        marginBottom:10
    },

    label:{
        fontWeight:'700',
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 5, 
    },

    textField:{
        paddingLeft: 15,
        height: 40,
        borderRadius: 18,
        width: '100%',
        backgroundColor: '#FFFFFF'
    }
})