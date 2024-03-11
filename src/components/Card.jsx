import {Text, Touchable, TouchableOpacity, View} from "react-native";


export default function Card ({letter, sound, color}){
    return (
        <View>
        <TouchableOpacity>
            <Text> {letter} </Text>
        </TouchableOpacity>
        </View>
    )
}