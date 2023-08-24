import { StyleSheet } from "react-native";

export const TaskStyles = StyleSheet.create({
    rowText:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom: 10,
        paddingLeft:0 
    },

    checkBox:{
        padding:0,
        margin:0,
        width: 10
    },

    title:{
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '500'
    },
})