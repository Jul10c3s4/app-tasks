import { View, Text } from "react-native"
import { TaskStyles } from "./task.style"
import { useState } from "react"
import {CheckBox} from 'react-native-elements'
interface ITask{
    title: string,
    checked: boolean
}
export const Task = ({title, checked}:ITask)=>{
    const [isChecked, setIsChecked] = useState(false)

    function handleCheckBox(){
        setIsChecked(!isChecked)
    }
    return( 
        <View style={TaskStyles.rowText}>
            <CheckBox size={30} containerStyle={TaskStyles.checkBox}
            center={true} checkedColor="#62D2C3" onPress={handleCheckBox} checked={checked}/>
            <Text style={TaskStyles.title}>{title}</Text>
        </View>
    )
}