import {Text} from 'react-native'
import { TextBlueStyles } from './blueText.styles'

interface ITextBlue{
    title: string
}
export const TextBlue = ({title}: ITextBlue)=>{
    return(
        <Text style={TextBlueStyles.title}>{title}</Text>
    )
}