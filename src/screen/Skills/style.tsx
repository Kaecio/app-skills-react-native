import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerList: {
        width: '60%',
        height: "auto",
        justifyContent: 'space-around',
        flexDirection: 'column',

    },
    constainerStars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    list:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    img:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
    }
});