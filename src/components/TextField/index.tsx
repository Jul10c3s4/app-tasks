import { View, Text, TextInput } from "react-native"
import { TextFieldStyles } from "./textField.style"

interface ITextField{
    label: String,
    placeholder: string,
    type: any,
    secure: boolean
}

export const TextField = ({label, secure, placeholder, type}: ITextField) =>{
    return(
        <View style={TextFieldStyles.container}>
            <Text style={TextFieldStyles.label}>{label}</Text>
            <TextInput
            placeholder={placeholder}
            secureTextEntry={secure} 
            keyboardType={type}
            style={TextFieldStyles.textField}/>
            
        </View>
    )
}