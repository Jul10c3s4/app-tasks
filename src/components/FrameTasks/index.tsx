import { View, Text,Image, TextInput, Alert, TouchableOpacity, ScrollView } from "react-native"
import { FrameTasksStyles } from "./tasks.style"
import { useEffect, useState } from "react"
import { Task } from "../Task/task"
import { doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { database, collection, addDoc } from "../../config/firebase"
export const FrameTasks = ()=>{
    interface Itask{
        title: string,
        id: any
    }

    const [value, setValue] = useState<string>('')
    const [tasks, setTaks] = useState<Itask[]>([])
    const [newtask, setnewTask] = useState('')
    

    useEffect(()=>{
        async function getData(){            
            const querySnapshot = await getDocs(collection(database, "task"));
            querySnapshot.forEach((task:any)=>{
                setTaks(prevState=> [...prevState,{ id:task.id,
                    ...task.data()}])
            })
            
        }
        getData()
    }, [])
    
    async function  handleAddTask(){
        try{
            if(value){
                const docRef = await addDoc(collection(database, "task"),{
                    title: value
                })            
                setTaks((prevState:any)=> [...prevState,{ id:docRef.id,
                    title:value}]);
                setValue('')
            }else{
                Alert.alert("Digite alguma tarefa!")
            }
            
        }catch(erro){
            console.log(erro);
            
            Alert.alert(erro as string)
        }
    }

    const handleUpdateClick = async (id:any, setisVisible:any)=>{
        const updateTask = doc(database, 'task', id)

        await updateDoc(updateTask, {
            title: newtask
        })
        setnewTask('')
        const ids = tasks.map((task)=>{ return task.id})
        const index = ids.indexOf(id)

        tasks[index].title = newtask 
        setTaks([...tasks])
        setisVisible(false)
     }

     function handleDeleteClick(id:any, setisVisible:any, title:any){
        const deleteTask = doc(database, 'task', id)
        if(title == newtask){
            deleteDoc(deleteTask)
            const ids = tasks.map((task)=>{ return task.id})
            const index = ids.indexOf(id)

            tasks.splice(index, 1)

            setTaks([...tasks])
            setisVisible(false)
        }else{            
            Alert.alert('nome da task incorreto!')
        }
     }
 
     const onClose = (setisVisible:any)=>{
         setisVisible(false)
     }
 
     const onOpen = (setisVisible:any)=>{
         setisVisible(true)
     }
 

     function handleOnChange(e:any){
        setnewTask(e)
    }
    return(
        <View style={FrameTasksStyles.container}>
            <View style={FrameTasksStyles.rowText}>
                <TextInput onChangeText={(e)=>{setValue(e)}} value={value} style={FrameTasksStyles.textField} placeholder="Daily Tasks"/>
                <TouchableOpacity onPress={handleAddTask}>
                 <Image source={require("../../../assets/add.png")}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex:1}}>
                {tasks.map((task:any)=>{
                    return(
                        <Task check={false} id={task.id} key={task.id} title={task.title} newtask={newtask} handleOnChange={handleOnChange} onClose={onClose} onOpen={onOpen} click={handleUpdateClick} deleteClick={handleDeleteClick}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}