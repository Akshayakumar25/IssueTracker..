import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DeleteProjectStyles = StyleSheet.create({
  mainView: {
    marginBottom: wp(10)
  },
  deletetext: {
    textAlign: 'center',
    margin: hp(1.5),
    fontSize: hp(3),
    fontWeight: 'bold',
    color: 'black'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: hp(1),
    height: hp(45)
  },
  picture: {
    height: hp(6),
    width: wp(14),

    margin: hp(1)
  },
  commomSpace: {
    margin: hp(1)
  },
  jiraStyle: {
    marginTop: wp(-0.5),
    marginLeft: wp(1.5),
    marginBottom: hp(0.5)
  },
  marginS: {
    marginLeft: wp(2)

  },
  flex: {
    flexDirection: 'row'
  },
  image: {
    alignItems: 'flex-end'
  }
})

export default DeleteProjectStyles;