import { StyleSheet } from "react-native";

export const TaskStyles = StyleSheet.create({
    rowText:{
        flexDirection:'row',
        justifyContent:'space-between',
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

    rowMain:{
        flexDirection:"row", 
        alignItems: "center"
    },

    rowButtons:{
        flexDirection:"row", 
        alignItems: "center", 
        justifyContent: "space-between"
    },
    
    buttonUpdate:{
        color:'white', 
        paddingBottom:8,
        textAlign:"center", 
        fontSize: 14, 
        backgroundColor:"lightblue", 
        fontWeight:"500", 
        borderRadius: 5, 
        paddingHorizontal: 8, 
        paddingVertical:3
    },

    buttonDelete:{ 
        paddingBottom:8, 
        color:'white', 
        fontSize: 14, 
        backgroundColor:"red", 
        fontWeight:"500", 
        borderRadius: 5, 
        paddingHorizontal: 8,  
        marginLeft: 20
    }
})