import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HomeScreenStyles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft: wp(10),
    margin: hp(5)
  },
  border: {
    borderWidth: hp(0.3),
    height: hp(14),
    width: wp(90),
    borderRadius: 10,
    marginBottom: wp(5)
  },
  picture: {
    height: hp(13),
    width: wp(26),
    marginLeft: hp(0.5),
    margin: hp(0.3)
  },
  flex: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'

  },
  text1: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: wp(25)

  },
  text3: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: wp(15)
  },
  newBorder: {
    borderWidth: hp(0.2),
    height: hp(20),
    width: wp(45),
    margin: hp(0.5),
    borderRadius: 10,
    alignItems: 'center'
  },
  mainView: {
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: wp(1.8),
    marginTop: hp(2.5)
  },
  text1: {
    color: 'black',
    fontSize: hp(3),
    margin: hp(3)
  },
  text2: {
    color: 'black',
    fontSize: hp(2.8)
  }
})

export default HomeScreenStyles;