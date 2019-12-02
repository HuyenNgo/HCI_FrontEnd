import { StyleSheet } from 'react-native';
import colors from './../config/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    textTitle: {
        fontSize: 20,
        paddingLeft:10
    },
    itemContainer: {
        marginBottom: 10,
        backgroundColor: colors.ITEM_CONTAINER_COLOR
    },
    subTitleItemText:{
        color:colors.BLACK
    },    
    listFooterButton:{
        height: 50, 
        width: 250, 
        alignSelf: 'center',
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent', 
        borderWidth: 2, 
        borderColor: 'black', 
        borderRadius: 30,
        marginBottom:100,
    },
    isFetchingLoadMoreText:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})