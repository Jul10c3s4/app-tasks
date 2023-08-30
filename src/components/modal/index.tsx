import Modal from 'react-native-modal';
import { View, Text, Image, Button, Alert, TextInput } from "react-native"
import { TaskStyles } from '../Task/task.style';
import { AlertModalStyles } from './alertModalstyle';
import { TextField } from '../TextField';

interface IModalAlert{
    label: String,
    placeholder: string,
    type: any,
    value?: any, 
    onChange?: any, 
    isVisible: boolean,
    onClose: any,
    click: any,
}
export const ModalAlert = ({label, placeholder, type, value, onChange, isVisible, onClose, click}:IModalAlert)=>{
    return(
        <Modal style={{justifyContent:'center', alignItems: 'center'}} isVisible={isVisible}>
                <View style={AlertModalStyles.modalContent}>
                    <TextField label={label} onChange={onChange} value={value} placeholder={placeholder} type={type} secure={false}/>
                    <View style={AlertModalStyles.buttonsContainer}>
                    <Text onPress={onClose} style={{color: 'red'}}>Cancelar</Text>
                    <Text onPress={click} style={{color: 'blue'}}>OK</Text>
                    </View>
                </View>
            </Modal>
    )
}