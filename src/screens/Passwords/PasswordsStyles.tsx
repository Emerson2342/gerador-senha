import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "#333333",
        flex: 1,
        padding: 15,
        alignContent: "center",
        alignItems: "center",
    },
    textHeader: {
        fontSize: 40,
        textAlign: "center",
        padding: 5,
        color: "#e5bf3c",
        fontWeight: "bold"
    },
    iconContainer: {
        width: '35%',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    lista: {
        backgroundColor: "#000",
        borderRadius: 5,
        marginVertical: 3,
        padding: 5
    },
    listContainer: {
        width: '100%',
        height: '90%'
    },
    titleContainer: {
        flexDirection: "row",
    },
    textList: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff",
        padding: 3
    },
    senhaContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    textoVazio: {
        top: 150,
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        padding: 10,
        borderRadius: 5
    }
});