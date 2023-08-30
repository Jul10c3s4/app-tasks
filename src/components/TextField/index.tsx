import { View, Text, TextInput } from "react-native"
import { TextFieldStyles } from "./textField.style"

interface ITextField{
    label: String,
    placeholder: string,
    type: any,
    secure: boolean,
    value?: any, 
    onChange?: any
}

export const TextField = ({label, secure, placeholder, type, value, onChange}: ITextField) =>{
    return(
        <View style={TextFieldStyles.container}>
            <Text style={TextFieldStyles.label}>{label}</Text>
            <TextInput
            value={value}
            onChangeText={(e)=>{onChange(e)}}
            placeholder={placeholder}
            secureTextEntry={secure} 
            keyboardType={type}
            style={TextFieldStyles.textField}/>
        </View>
    )
}