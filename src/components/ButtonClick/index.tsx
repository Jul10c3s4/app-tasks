import { TouchableOpacity, Text, ColorValue, DimensionValue, View } from "react-native"
import React from 'react'
interface IButtonClick{
    background: ColorValue,
    title: String,
    onClick?: any
    body?: React.ReactNode
}

export const ButtonClick = ({background,body, title, onClick}: IButtonClick)=>{
    return(
        <View style={{width: "100%", alignItems: "center", position: 'absolute', bottom: 50}}>
           <TouchableOpacity onPress={onClick} style={{borderRadius: 6,  flexDirection: 'row', justifyContent: 'center', backgroundColor: background, width: "90%", paddingVertical: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
        </TouchableOpacity> 
        {body}
        </View>
    )
}