import {StyleSheet, View} from "react-native";
import alphabet from "../data/alphabet";
import Card from "./Card";

export  default  function layout() {
    return (
            <View style={styles.layout}>
                {alphabet.map((letter) => (
                    <Card key={letter.letter} letter={letter.letter} audio={letter.sound}/>
                ))}
            </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    }
})
