import { View, Text, Image, Button, Alert, TextInput } from "react-native"
import { TaskStyles } from "./task.style"
import { useState } from "react"
import {CheckBox} from 'react-native-elements'
import { doc, updateDoc } from "firebase/firestore"
import { database } from "../../config/firebase"
import Modal from 'react-native-modal';
import { TextField } from "../TextField"
interface ITask{
    id: string,
    title: string,
    check: boolean, 
}
export const Task = ({title, check, id}:ITask)=>{
    const [isChecked, setIsChecked] = useState(check)
    const [isVisible, setisVisible] = useState(false)
    const [newtask, setnewTask] = useState('')
    function handleCheckBox(){
        setIsChecked(!isChecked)
    }

     const handleUpdateClick = async ()=>{
        const updateTask = doc(database, 'task', id)
        console.log(id);
        
        console.log(updateTask.path);
        
        await updateDoc(updateTask, {
            title: newtask
        })
        setnewTask('')
        setisVisible(false)
     }

    function handleDeleteClick(){

    }

    const onClose = ()=>{
        setisVisible(false)
    }

    const onOpen = ()=>{
        setisVisible(true)
    }

    function handleOnChange(e:any){
        setnewTask(e)
    }
    return( 
        <View style={TaskStyles.rowText}>
            <View style={{flexDirection:"row", alignItems: "center"}}>
            <CheckBox size={30} containerStyle={TaskStyles.checkBox}
            center={true} checkedColor="#62D2C3" onPress={handleCheckBox} checked={isChecked}/>
            <Text style={TaskStyles.title}>{title}</Text>
            </View>
            <View style={{flexDirection:"row", alignItems: "center", justifyContent: "space-between"}}>
            <Text onPress={onOpen} style={{color:'white', paddingBottom:8,textAlign:"center", fontSize: 14, backgroundColor:"lightblue", fontWeight:"500", borderRadius: 5, paddingHorizontal: 8, paddingVertical:3}}>
                <Image style={{width: 20, height:20}} source={require('../../../assets/update.png')}/>
            </Text>
            <Text onPress={onOpen} style={{ paddingBottom:8, color:'white', fontSize: 14, backgroundColor:"red", fontWeight:"500", borderRadius: 5, paddingHorizontal: 8,  marginLeft: 20}}>
                <Image style={{width: 20, height:20}} source={require('../../../assets/excluir.png')}/></Text>
            </View>

            <Modal isVisible={isVisible}>
                <View style={TaskStyles.modalContent}>
                    <TextField label={"informe a nova task"} onChange={handleOnChange} value={newtask} placeholder={title} type={'default'} secure={false}/>
                    <View style={TaskStyles.buttonsContainer}>
                    <Text onPress={onClose} style={{color: 'red'}}>Cancelar</Text>
                    <Text onPress={handleUpdateClick} style={{color: 'blue'}}>OK</Text>
                    </View>
                </View>
    </Modal>
        </View>
    )
}