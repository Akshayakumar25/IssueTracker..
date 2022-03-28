import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';

const IssueListScreenStyles = StyleSheet.create({
    text:{
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      margin:hp(1),
      fontSize:hp(3),
      fontWeight:'bold',
      color:'black'
    },
    button: {
      backgroundColor: "#DDDDDD",
      alignSelf:'center',
      alignItems:'center',
      textAlign:'center'
    },
    pendingIssue:{
      padding:hp(1.5),
      color:'black'
    },
    card: { 
      flex:1,
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:'white',
      borderRadius:10,
      marginVertical :hp(4) ,
      marginHorizontal:wp(5),
      padding:hp(4),     
     },
     button2:{
       alignSelf:'flex-start',
       textAlign:'center',
       backgroundColor:'#FF0303',
     },
     commommargin:{
       margin:hp(0.7)
     },
     padding:{
      padding:hp(1.5),
     },
     marginLeft:{
      marginLeft:wp(22)
     },
     marginc:{
      margin:hp(1)
     },
     mainView:{
       marginBottom:hp(10)
     },
     subView:{
      flexDirection:'row',
      alignSelf:'center',
      padding:hp(1)
     },
     flexView:{
      flexDirection:'row',
      margin:hp(1)
     },
     flexStyle:{
       flexDirection:'row',
       marginTop:hp(2)
     },
     statusText:{
       marginLeft:wp(10),
       fontSize:18,
       fontWeight:'bold',
       color:'black'
     }
  });
  export default IssueListScreenStyles;