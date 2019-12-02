import { StyleSheet } from 'react-native';
import colors from '../config/colors'

export default StyleSheet.create({
    buttonSubmit: {
        backgroundColor: colors.NAVY,
        height: 60,
        borderColor: colors.TRANSPARENT,
        borderWidth: 0,
        borderRadius: 5,
        // alignSelf: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    titleButtonSubmit: {
        //fontWeight: "500",
        color: colors.WHITE
    },
    containerButtonSubmit: {
        marginTop: 20,
        marginHorizontal: 5,
        marginBottom: 5
    },
    buttonSubmit2: {
        height: 50,
        width: 300,
        alignSelf: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.TRANSPARENT,
        borderWidth: 2,
        borderColor: colors.TOMATO,
        borderRadius: 30,
        marginBottom: 10
    },
    noFoundTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf:'center',
        margin: 10
    },
    noFoundText: {
        fontSize: 18,
        //fontWeight:'bold',
        color: colors.BLACK
    },
    flatListContainer: {
        flex: 1,
        padding: 10
    }
})