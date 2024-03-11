import {StyleSheet, Text, TouchableOpacity,} from "react-native";
import {useState} from "react";
import { Audio } from 'expo-av'


export default function Card ({letter, audio}){

    const [sound, setSound] = useState()
    const [backgroundColor, setBackgroundColor] = useState(RandomColor());

    async function playSoundLetter() {
        const { sound } =  await Audio.Sound.createAsync(audio)
        setSound(sound)
        await sound.playAsync()
    }

    return (
        <TouchableOpacity style={[styles.card, { backgroundColor }]} onPress={playSoundLetter}>
            <Text style={styles.letter}>
                {letter}
            </Text>
        </TouchableOpacity>
    )
}

const RandomColor = () => {
    const colors = ['#FF8C9C', '#6B71D6', '#8AD66B', '#D66BC8']
    return colors[Math.floor(Math.random() * colors.length)];
};


const styles = StyleSheet.create({
    card: {
        padding: 5,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        width: 70,
        height: 70
    },
    letter: {
        fontSize: 45,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.64)',
        fontWeight: "900"
    }
})
