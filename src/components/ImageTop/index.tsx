import { Image } from "react-native"

export const ImageTop = ()=>{
    return(<Image style={{position: 'absolute',
    top: 27,
    left: 0,
    zIndex: 10
}} source={require("../../../assets/shape.png")}/>
    )
}