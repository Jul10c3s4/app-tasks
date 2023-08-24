import { StyleSheet } from 'react-native';

export const HomeStyles = StyleSheet.create({
    home:{
        flex: 1,
        
    },
    
    upPart:{
        flex: 3,
        backgroundColor: '#62D2C3',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    
    titleWhite:{
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 20
    },

    downPart:{
        flex:6,
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },

    imageWatch:{
        width: 110,
        height: 110,
        marginTop: 20,
        marginBottom: 5
    },

    blockDown:{
        flex: 1,
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 20,

    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

})