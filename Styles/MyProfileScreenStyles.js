import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MyProfileScreenStyles = StyleSheet.create({
    card:{
      backgroundColor:'white',
      borderRadius:10,
      alignContent:'center',
      alignSelf:'center',
      width:wp(80),
      height:hp(40),
      marginTop:hp(1)
  
    },
    profiletext:{
      fontSize:20,
      color:"white",
      textAlign:'center',
      marginTop:hp(17),
      margin:hp(3)
    },
    picture:{
      borderRadius:70,
      alignContent:'center',
      alignSelf:'center',
      height:hp(20),
      width:wp(40)
    },
    smallcard:{
      backgroundColor:'#DDDDDD',
      borderRadius:1,
      alignContent:'center',
      alignSelf:'center',
      width:wp(70),
      height:hp(5)
    },
    commontext:{
      marginLeft:wp(5),
      marginBottom:hp(1)
    },
    mainView:{
      backgroundColor:'#f09618',
      flex:1
    },
    submit: {
      marginTop:hp(3),
      paddingTop:hp(1),
      paddingBottom:hp(2),
      backgroundColor: '#f0491a',
      borderRadius: 10,
      borderWidth:wp(0.15),
      borderColor: '#f0491a',
      marginRight:hp(10),
      marginLeft:hp(10),
      marginEnd:hp(10)
    },
    submitText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight:'bold',
      fontSize:18
    },
  });
  export default MyProfileScreenStyles;