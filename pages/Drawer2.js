import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://i.pinimg.com/736x/10/7c/36/107c360dcf10299d87db034f902417e5.jpg",
                }}
                style={styles.image}
            />
            <Text style={styles.text}>
                Quadrilha Pay Day - Assalto a banco- formação de quadrilha e estelionato.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        padding: 20,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 15,
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        color: "white",
        textAlign: "center",
        fontStyle: "italic",
        paddingHorizontal: 20,
    },
});
