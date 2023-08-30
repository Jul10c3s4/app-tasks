import { View, Text,Image, TextInput, Alert, TouchableOpacity, ScrollView } from "react-native"
import { FrameTasksStyles } from "./tasks.style"
import { useEffect, useState } from "react"
import { Task } from "../Task/task"
import { getDocs, updateDoc } from "firebase/firestore"
import { database, collection, addDoc } from "../../config/firebase"
export const FrameTasks = ()=>{

    const [value, setValue] = useState<string>('')
    const [tasks, setTaks] = useState<string[]>([])

    useEffect(()=>{
        async function getData(){
            console.log('oi');
            
            const querySnapshot = await getDocs(collection(database, "task"));
            querySnapshot.forEach((task:any)=>{
                setTaks(prevState=> [...prevState,{ id:task.id,
                    ...task.data()}])
            })
            console.log("tasks",tasks)
            
        }
        getData()
    }, [])
    async function  handleTask(){
        try{
            const docRef = await addDoc(collection(database, "task"),{
                title: value
            })            
            Alert.alert(docRef.id as any)
            setTaks((prevState:any)=> [...prevState,{ id:docRef.id,
                title:value}]);
            setValue('')
        }catch(erro){
            console.log(erro);
            
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
                {tasks.map((task:any)=>{
                    return(
                        <Task check={false} id={task.id} key={task.id} title={task.title}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}