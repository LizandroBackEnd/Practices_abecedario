import {Text, View} from "react-native";
import alphabet from "../data/alphabet";
import Card from "./Card";

export  default  function layout() {
    return (
        <View>
            {alphabet.map((letter) => (
                <Card {...letter}/>
            ))}

        </View>
    );
}