import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const AdminScreenStyles=StyleSheet.create({ 
      border1:{
        borderWidth: 1,
        borderColor:'#258bf7',
        borderRadius:7,
        marginTop:hp(30),
        margin:hp(10)
      },
      border2:{
        borderWidth: 1,
        borderColor:'#258bf7',
        borderRadius:7,
        marginTop:hp(1),
        margin:hp(10)
      },
      text:{
        padding:hp(1),
        textAlign:'center',
        fontWeight:'bold',
        fontSize:hp(3),
        color:'black'
      }
});

export default AdminScreenStyles;