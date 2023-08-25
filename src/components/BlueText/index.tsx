import {Text} from 'react-native'
import { TextBlueStyles } from './blueText.styles'

interface ITextBlue{
    title: string,
    onClick?:any
}
export const TextBlue = ({title, onClick}: ITextBlue)=>{
    return(
        <Text style={TextBlueStyles.title} onPress={onClick}>{title}</Text>
    )
}