import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#333333",
        alignItems: "center",
        justifyContent: "center",
    },
    logoContainer: {
        flexDirection: "column",
        borderColor: "#e5bf3c",
        justifyContent: "center",
        alignSelf: "center",
    },
    inputContainer: {
        width: "100%",
        alignItems: "center",

    },
    passContainer: {
        justifyContent: "center",
        alignSelf: 'center',
        backgroundColor: "#000",
        width: 300,
        height: 50,
        borderRadius: 7
    },
    optionItem: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        textAlign: "right",
        width: "20%",
    },
    optionsContent: {
        flexDirection: 'row',
        paddingTop: 5
    },
    textOptions: {
        fontSize: 20,
        color: "#fff",
        textAlign: "left",
        width: '80%'
    },
    buttonContainer: {
        width: '100%',
        top: 10
    },
    button: {
        alignItems: "center",
        width: "75%",
        alignSelf: 'center',
        backgroundColor: "#e5bf3c",
        borderRadius: 5,
        elevation: 5,
        marginTop: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        padding: 5,
        textAlign: 'center'
    },
    textPassword: {
        color: "#fff",
        padding: 7,
        fontSize: 20,
        width: '90%',
        borderRadius: 9,
        alignSelf: 'center',
        textAlign: 'center'
    },
    textChar: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1.50,
        color: "#e5bf3c",
    }
});
