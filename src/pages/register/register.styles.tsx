import { StyleSheet } from "react-native";

export const RegisterStyles = StyleSheet.create({
    scroll:{
        height:'100%',
        backgroundColor: 'red'
    },
    registerPage:{
        backgroundColor:'#EEEEEE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5
    },

    subTitle:{
        fontWeight: '500',
        width: 260,
        fontSize: 14,
        marginBottom: 40
    },

    
    textRow:{
        marginTop: 10,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    
    subTitlef:{
        fontWeight: '500',
        fontSize: 14,
        marginRight: 5
    },
})