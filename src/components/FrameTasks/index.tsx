import { View, Text,Image, TextInput, Alert, TouchableOpacity, ScrollView } from "react-native"
import { FrameTasksStyles } from "./tasks.style"
import { useEffect, useState } from "react"
import { Task } from "../Task/task"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { database } from "../../config/firebase"
export const FrameTasks = ()=>{

    const [value, setValue] = useState<string>('')
    const [tasks, setTaks] = useState<string[]>([])

    useEffect(()=>{
        async function getData(){
            const querySnapshot = await getDocs(collection(database, "tasks"));
            console.log(querySnapshot);
            
            setTaks(querySnapshot as any)
        }
        getData()
    }, [])
    async function  handleTask(){
        try{
            const docRef = await addDoc(collection(database, 'tasks'),{
                task: value
            })
            setTaks((prevState)=> [...prevState, value]);
            setValue('')
        }catch(erro){
            Alert.alert(erro as string)
        }
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