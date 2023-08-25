import { View, Text, Image } from "react-native"
import { HomeStyles } from "./home.styles"
import { ImageTop } from "../../components/ImageTop"
import { FrameTasks } from "../../components/FrameTasks"
import {useRoute} from '@react-navigation/native'
import { collection, addDoc } from "firebase/firestore"

export const Home = ()=>{
    const route = useRoute()

    const {name} = route.params;
    return(
        <View style={HomeStyles.home}>
            <Image style={{position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 10
            }} source={require("../../../assets/shapeWhite.png")}/>
            <View style={HomeStyles.upPart}>
            <Image style={{
            }} source={require("../../../assets/profile.png")}/>
            <Text style={HomeStyles.titleWhite}>Welcome {name}</Text>
            </View>
            <View style={HomeStyles.downPart}>
            <Image style={HomeStyles.imageWatch} source={require("../../../assets/watch.png")}/>
            <View style={HomeStyles.blockDown}>
                <Text style={HomeStyles.title}>Tasks List</Text>
                <FrameTasks/>
            </View>
            </View>
        </View>
    )
}