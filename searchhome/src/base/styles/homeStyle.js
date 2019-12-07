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
         //borderColor:'#4877F8',
         //borderRadius:10,
        // borderWidth:1,
        
         
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
        paddingTop:'14%',
        height:50,
        
    },

    stylesheader:
    {
        flexDirection:'row', 
        justifyContent: 'flex-start',
        borderColor:'#E1E1E1',
        borderRadius:1,
        borderWidth:1,
        paddingLeft:'30%',
        paddingTop:'5%'
        
        
    },
    ImageRight: {
        padding:5,
        marginLeft:2,
        marginBottom:2,
        marginRight:5,
        marginTop:5,
        height: 150,
        width: '47%',
        resizeMode: 'stretch',
        alignItems: 'center',

    },
    ImageLeft: {
        padding:5,
        marginLeft:10,
        marginBottom:2,
       // marginRight:2,
        marginTop:5,
         height: 150,
         width: '47%',
         resizeMode: 'stretch',
         alignItems: 'center',
 
     },
    ImageLeft2: {
        padding:5,
        marginLeft:10,
        marginBottom:2,
        //marginRight:2,
        marginTop:3,
       
        height: 160,
        width: '31%',
        resizeMode: 'stretch',
        alignItems: 'center',

    },
    ImageCenter: {
        padding: 5,
       margin:3,
        height: 160,
        width: '31%',
        resizeMode: 'stretch',
        alignItems: 'center',

    },
    ImageRight2: {
       // padding:2,
        //marginLeft:2,
        opacity:0.6,
        marginRight:10,
        //paddingRight:'5%',
       marginTop:3,
        height: 160,
        width: '31%',
        resizeMode: 'stretch',
        alignItems: 'center',

    },
   
//styleDetailHome
styleview:
{
    flexDirection: 'row',
     paddingTop: '5%',
     paddingLeft:'5%',
     
    // marginRight:20,
     //marginLeft:20,

},
styleview2:
{

    
    // paddingTop: '2%',
     marginHorizontal:20,
     marginVertical:20,
     borderBottomColor:'#CFCFCF',
     borderBottomWidth:1,
     borderStyle:'solid',
},
styleview3:
{
    flexDirection: 'row',
    // paddingTop: '5%',
     paddingLeft:'5%',
     justifyContent:'space-between'
     
    // marginRight:20,
     //marginLeft:20,

},
styleview4:
{
    flexDirection: 'row',
   // paddingTop: '5%',
    // paddingLeft:'5%',
     justifyContent:'space-between',
     marginTop:30,
     
    // marginRight:20,
     //marginLeft:20,

},
styleview5:
{
    flexDirection: 'row',
   // paddingTop: '5%',
    // paddingLeft:'5%',
     justifyContent:'space-between',
     marginTop:30,
    // marginBottom:5
    // marginRight:20,
     //marginLeft:20,

},

text1:
{
    paddingTop:'5%',
    color:'red',
    fontSize:16
},
text2:{
    paddingTop:'5%',
    color:'black',
    fontSize:16

},
text4:{
    paddingTop:'5%',
    color:'black',
    fontSize:15,
    marginLeft:15

},

text3:{
    paddingTop:'5%',
    color:'black',
    fontSize:16,
    paddingLeft:-1,

},
image1:
{
    width:25,
    height:25
}
    
})