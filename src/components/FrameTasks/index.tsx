import { View, Text,Image, TextInput, Alert, TouchableOpacity, ScrollView } from "react-native"
import { FrameTasksStyles } from "./tasks.style"
import { useState } from "react"
import { Task } from "../Task/task"

export const FrameTasks = ()=>{
    const [value, setValue] = useState<string>('')
    const [tasks, setTaks] = useState<string[]>([])
    

    function handleTask(){
        console.log(value);
        
        tasks.push(value)
        setTaks((prevState)=> [...prevState, value])
        console.log(tasks);
        
    }
    return(
        <View style={FrameTasksStyles.container}>
            <View style={FrameTasksStyles.rowText}>
                <TextInput onChangeText={(e)=>{setValue(e)}} value={value} style={FrameTasksStyles.textField} placeholder="Daily Tasks"/>
                <TouchableOpacity onPress={handleTask}>
                 <Image source={require("../../../assets/add.png")}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex:1}}>
                {tasks.map((task)=>{
                    console.log(typeof(task));
                    
                    return(
                        <Task title={task} checked={false}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}