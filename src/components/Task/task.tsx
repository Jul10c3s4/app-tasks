import { View, Text, Image, Button, Alert, TextInput } from "react-native"
import { TaskStyles } from "./task.style"
import { useState } from "react"
import {CheckBox} from 'react-native-elements'
import { doc, updateDoc } from "firebase/firestore"
import { database } from "../../config/firebase"
import Modal from 'react-native-modal';
import { TextField } from "../TextField"
import { ModalAlert } from "../modal"
interface ITask{
    id: string,
    title: string,
    check: boolean, 
    newtask: string,
    handleOnChange: any,
    onClose:any,
    onOpen:any,
    click: any,
    deleteClick:any
}

export const Task = ({title, check, id, newtask, handleOnChange, onClose, onOpen, click, deleteClick}:ITask)=>{
    const [isChecked, setIsChecked] = useState(check)
    const [isVisible, setisVisible] = useState(false)
    const [isVisibleDelete, setisVisibleDelete] = useState(false)
    const titulo = title
    
    function handleCheckBox(){
        setIsChecked(!isChecked)
        
    }
    
    function HandleClick(){
        click(id, setisVisible)
    }

    function HandleDeleteClick(){
        deleteClick(id, setisVisibleDelete, title)
    }
    
    function handleOnclose(){
        onClose(setisVisible)
    }
    
    function handleOnOpen(){
        onOpen(setisVisible)
     }

     function handleOncloseDelete(){
        onClose(setisVisibleDelete)
    }
    
    function handleOnOpenDelete(){
        onOpen(setisVisibleDelete)
     }
    
    
    return( 
        <View style={TaskStyles.rowText}>
            <View style={TaskStyles.rowMain}>
                <CheckBox size={30} containerStyle={TaskStyles.checkBox}
                center={true} checkedColor="#62D2C3" onPress={handleCheckBox} checked={isChecked}/>
                <Text style={TaskStyles.title}>{title}</Text>
            </View>
            <View style={TaskStyles.rowButtons}>
                <Text onPress={handleOnOpen} style={TaskStyles.buttonUpdate}>
                    <Image style={{width: 20, height:20}} source={require('../../../assets/update.png')}/>
                </Text>
                <Text onPress={handleOnOpenDelete} style={TaskStyles.buttonDelete}>
                    <Image style={{width: 20, height:20}} source={require('../../../assets/excluir.png')}/>
                </Text>
            </View>
            <ModalAlert label="digite a nova tarefa para atualizar:" placeholder={titulo} type={'default'} value={newtask} onChange={handleOnChange} isVisible={isVisible} onClose={handleOnclose} click={HandleClick}/>
            <ModalAlert label="informe o nome da tarefa para excluí-la:" placeholder={titulo} type={'default'} value={newtask} onChange={handleOnChange} isVisible={isVisibleDelete} onClose={handleOncloseDelete} click={HandleDeleteClick} />
        </View>
    )
}