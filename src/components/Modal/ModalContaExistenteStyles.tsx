import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "rgba(24,24,24,0.8)",
        justifyContent: "center",
    },
    content: {
        backgroundColor: "#000",
        width: "97%",
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: "#e5bf3c"
    },
    button: {
        backgroundColor: "#e5bf3c",
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center"
    }
});