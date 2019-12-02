import { StyleSheet } from 'react-native';
import colors from './../config/colors'
import metrics from './../config/metrics'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container2: {
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
      
    },
    logo: {
        flex: 1,
        width: '50%',
        marginTop:30,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 100/2
    },
    form: {
        flex: 1,
        paddingVertical: 12,
        justifyContent: 'center',
        width: '80%',
    },
    space: {
        height: 40,
        marginBottom: 20,
    },
    space2: {
        height: 40,
        width:metrics.DEVICE_WIDTH*2/3,
       marginTop: 10,
    },
})