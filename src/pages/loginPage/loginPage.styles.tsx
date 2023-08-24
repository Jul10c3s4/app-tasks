import { StyleSheet } from "react-native"
export const LoginPageStyles = StyleSheet.create({
    loginPage:{
        backgroundColor: '#EEEEEE',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageCenter:{
        marginVertical: 20
    },

    title:{
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 5
    },
    subTitle:{
        fontWeight: '500',
        marginTop: 6,
        width: 260,
        fontSize: 14,
    },
    
    rowText:{
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    rowTexts:{
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    subTitlef:{
        fontWeight: '500',
        fontSize: 14,
        marginRight: 5
    },
})