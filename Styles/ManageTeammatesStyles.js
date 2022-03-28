import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const ManageTeammatesStyles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "#dce0e6",
        borderRadius:10,
        margin:hp(1),
        backgroundColor:'#dce0e6',
        marginTop:hp(2),
        width:wp(80),
        alignItems:'center'
      },
    view:{
        marginTop:hp(5)
      },
    text:{
        alignSelf:'center',
        fontWeight:'bold',
        color:'black',
        fontSize:hp(3),
        marginTop:hp(10)
    },
    manageEmail:{
      alignSelf:'center',
      marginTop:hp(7)
    },
    managee:
    {
      alignSelf:'center',
      marginTop:hp(10)
    },
    margin:{
      margin:hp(1)
    },
    mainView:{
      backgroundColor:'#f2ac61',
      flex:1
    }
  });
  export default ManageTeammatesStyles;