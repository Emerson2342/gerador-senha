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
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%'
    },
    button: {
        width: '48%',
        backgroundColor: "#e5bf3c",
        borderRadius: 5,
        top: 15,
        marginVertical: 5,
        borderWidth: 1, borderColor: "#e5bf3c"
    },
    input: {
        width: "100%",
        marginVertical: 5,
        backgroundColor: "#fff",
        height: 50,
        padding: 15,
        borderRadius: 5,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    senha: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#e5bf3c",
        textAlign: "center",
        marginBottom: 10
    },
    textClose: {
        padding: 5,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
    }
});