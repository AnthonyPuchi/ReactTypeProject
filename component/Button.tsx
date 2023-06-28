import React from "react";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";

interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {
    const handlePress = () => {
        // Lógica para manejar el evento onPress del botón
        Alert.alert("You pressed a button");
    };

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingRight: 10,
    },
    buttonLabel: {
        color: 'black',
        fontSize: 16,
    },
});