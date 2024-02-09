import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 90,
        backgroundColor: "#333333",
        flex: 1,
        padding: 15,
        alignContent: "center",
        alignItems: "center",
    },
    content: {
        width: "60%",
        alignItems: "center",

    },
    textHeader: {
        fontSize: 40,
        textAlign: "center",
        padding: 5,
        color: "#e5bf3c",
        fontWeight: "bold"
    },
    icon: {
        justifyContent: "center"

    },
    lista: {
        flexDirection: "row",
        backgroundColor: "#000",
        borderRadius: 5,
        padding: 2,
        marginVertical: 5,


    },
    listContainer: {
        top: 20,
        height: 500
    },
    titleContainer: {
        flexDirection: "row",
    },
    textList: {
        fontSize: 17,
        marginVertical: 15,
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff"
    }
});