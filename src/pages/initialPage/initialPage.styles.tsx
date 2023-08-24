import { StyleSheet } from "react-native"

export const InitialPageStyles = StyleSheet.create({
    container:{
        backgroundColor:'#EEEEEE',
        flex: 1
    },
    initialPage:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column',
    },

    imageCenter:{

    },

    title:{
        marginTop: 50,
        fontWeight: 'bold',
        fontSize: 22
    },

     subTitle:{
        fontWeight: '400',
        marginTop: 6,
        width: 260,
        fontSize: 14,
     }
})