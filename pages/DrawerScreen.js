import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Navegação da Página Drawer</Text>

            <Text style={styles.description}>
                Use o menuzinho lateral para poder acessar a outra página!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "whitepurple",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "darkblue",        
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
        paddingHorizontal: 20,
    },
});
