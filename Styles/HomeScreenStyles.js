import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreenStyles=StyleSheet.create({
    container: {
        marginTop:hp(3),
        padding:hp(2),
      },
      item: {
        backgroundColor: "#f5f520",
        padding: 10,
        marginVertical: 7,
        marginHorizontal: 10,
      },
      button: {
        backgroundColor: "#DDDDDD",
        alignSelf:'center',
        alignItems:'center',
        textAlign:'center'
      },
})

export default HomeScreenStyles;