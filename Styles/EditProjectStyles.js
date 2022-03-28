import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const EditProjectStyles=StyleSheet.create({
    card: { 
        backgroundColor:'white',
        borderRadius:10,
        margin:hp(1),
        height:hp(40)       
       },
      picture:{
        height:hp(5),
        width:wp(9),
        alignItems:'flex-end',
        alignSelf:'flex-end'
      },
      commonMargin:{
        margin:hp(1)
      }
})

export default EditProjectStyles;