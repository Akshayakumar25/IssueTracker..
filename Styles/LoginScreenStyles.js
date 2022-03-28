import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LoginScreenStyles = StyleSheet.create({
    view:{
        margin:hp(5),
        alignSelf:'center',
        width:wp(62)
    },
    ButtonText:{
      color:'black',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:16
    },
    welcometext:{
      alignSelf:'center',
      fontWeight:'bold',
      color:'black',
      fontSize:18
  
    },
    textInput: {
      borderWidth:wp(0.3),
      borderColor: "#fca635",
      borderRadius:10,
      margin:hp(1),
      marginTop:hp(3),
      width:wp(61),
      alignItems:'center'
    },
    text:{
      fontSize:18,
      fontWeight:'bold',
      textDecorationLine: 'underline',
      color:'#f5a11b',
  
    },
    submit: {
      marginTop:hp(1),
      paddingTop:hp(1),
      paddingBottom:hp(2),
      backgroundColor: '#fca635',
      borderRadius: 10,
      borderWidth:wp(0.15),
      borderColor: '#fca635',
    },
    submitText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight:'bold',
      fontSize:18
    },
    alignText:{
      alignSelf:'center',
      marginTop:hp(20)
    },
    usertext:{
      fontSize:16,
      color:'black'
    }
  });
  
  export default LoginScreenStyles;