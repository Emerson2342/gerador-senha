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
        width: "85%",
        borderRadius: 5,
        padding: 30,
        borderWidth: 1,
        borderColor: "#e5bf3c"
    },
    button: {
        backgroundColor: "#e5bf3c",
        borderRadius: 5,
    },
    text: {
        fontSize: 23,
        padding: 10,
        marginBottom: 15,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    textClose: {
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold'

    }
});