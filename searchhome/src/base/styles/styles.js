import { StyleSheet } from 'react-native';
import colors from './../config/colors'
import metrics from './../config/metrics'

export default StyleSheet.create({
  baseText: {
    fontSize: 20,
    color: '#4877F8',
    fontStyle: 'normal',

  },
  titleText: {
    fontSize: 20,
    color: '#383030',
    fontStyle: 'normal',

  },

  container: {
    flex: 1,

  },
  scrollView: {
    backgroundColor: 'transparent',
    height: '100%'
  },

  containerCheckbox:
  {


    backgroundColor: 'transparent',
    borderStyle: 'dashed',
    borderColor: 'transparent'
  },
  textCheckbox:
  {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.7)',

  },

  textlabel:
  {
    fontSize: 13,
    color: '#383030',
    fontStyle: 'normal',

  },

  styleview: {


    borderRadius: 8,
    borderStyle: 'dashed',
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent:'center',
    alignItems:'center',
    borderColor: 'black',
   
    borderWidth: 1,
    marginRight:30,
    marginLeft:10,
    height:200,
    paddingTop:'15%',
    
    

  },

  stylerow:
  {

    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:'3%'
    
  },
   iconStyle1:
   {
     marginRight:15,
   },
   iconStyle2:
   {
     marginRight:35,
   },
   button1:
   {
    backgroundColor: '#F5F5F5',
    borderColor: '#4877F8',
    borderRadius: 10,
   },
   titleStyle1:
   {
    color: '#383030',
   },

   textheader:
   {
    color: '#F21212', 
    fontSize: 20,
   
    marginRight:20
   },

   texttile:
   {
    color: '#000',
     fontSize: 20, 
    
    marginRight:50
   },
  

 
})
