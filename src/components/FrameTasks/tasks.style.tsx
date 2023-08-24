import { StyleSheet } from "react-native";

export const FrameTasksStyles = StyleSheet.create({
    container:{
        marginBottom: 20,
        width: '100%',
        flex:1,
        backgroundColor:'#fff',
        borderRadius: 16,
        elevation: 20,
        shadowColor: '#000',
        paddingHorizontal: 20,
    },

    rowText:{
        marginBottom: 15,
        marginTop: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    textField:{
        fontSize: 18,
        fontWeight: '500',
        width: '80%',
        borderBottomWidth:1
    },
    
    title:{
        fontSize: 18,
        fontWeight: '500'
    },
})