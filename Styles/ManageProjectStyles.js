import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ManageProjectStyles = StyleSheet.create({
    border1:{
        borderWidth: 1,
        borderColor:'#258bf7',
        borderRadius:7,
        marginTop:hp(25),
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
        alignSelf:'center',
        fontWeight:'bold',
        color:'black',
        fontSize:hp(3),
        margin:hp(1)
    },


});
export default ManageProjectStyles;