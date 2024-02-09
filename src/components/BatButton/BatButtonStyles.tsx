import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    optionsContainer: {
        paddingBottom: 15,
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

    },
    textOptions: {
        fontSize: 20,
        color: "#e5bf3c",
        textAlign: "left",
        width: '80%'
    },
    button: {
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        paddingVertical: 12,
        backgroundColor: "black",
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 5,
        marginTop: 15

    },
    text: {
        fontSize: 25,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.50,
        color: "#e5bf3c"
    },
    textChar: {
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1.50,
        color: "#e5bf3c",
    }
});