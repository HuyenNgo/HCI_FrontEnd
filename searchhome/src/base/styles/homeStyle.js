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
    },
  
    viewtab:
    {
       flex:4,
         backgroundColor: '#FFFFFF' ,
         marginTop:40,
         height:40,
         marginBottom:10,
         marginRight:10,
         marginLeft:5,
         borderColor:'#4877F8',
         borderRadius:10,
         borderWidth:1,
        
         
    },
    viewbody:
    {
        flex: 9,
         backgroundColor: '#FFFFFF' ,
         paddingTop:'8%',
         
    },
    styleViewButton:
    {
        flex:1,
        backgroundColor: '#FFFFFF' ,
        paddingTop:'12%',
        height:50,
        
    },

    stylesheader:
    {
        flexDirection:'row', 
        justifyContent: 'flex-start',
        borderBottomColor:'#E1E1E1',
        borderRadius:1,
        borderWidth:1,
        borderStyle:'solid',
        
    },
})