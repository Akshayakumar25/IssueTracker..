import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const listProjectStyles = StyleSheet.create({
    editText: {
        textAlign: 'center',
        fontSize: hp(3),
        color: 'black',
        marginTop: hp(4)

    },
    border3: {
        marginTop: hp(4),
        borderWidth: hp(0.2),
        borderRadius: 7,
        margin: hp(1),
        width: wp(70),
        alignSelf: 'center',
        borderColor: '#fca635'
    },
    sqborder: {
        borderWidth: hp(0.2),
        height: hp(20),
        width: wp(70),
        alignSelf: 'center',
        margin: hp(1),
        borderColor: '#fca635'
    },
    pickerBorder: {
        borderWidth: hp(0.2),
        width: wp(70),
        alignSelf: 'center',
        margin: hp(1),
        borderRadius: 10,
        borderColor: '#fca635'
    },
    flex1: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: hp(3),
    },
    addButton: {
        borderWidth: wp(0.3),
        height: hp(7),
        width: wp(30),
        margin: hp(1),
        borderRadius: 10,
        borderColor: '#fca635',

    },
    button: {
        color: '#fca635',
        fontSize: 20,
        textAlign: 'center',
        marginTop: hp(1)

    },
    button3: {
        color: 'white',
        fontSize: 20,
        marginTop: hp(1),
        textAlign: 'center'
    },
    addButton1: {
        borderWidth: wp(0.3),
        height: hp(7),
        width: wp(30),
        margin: hp(1),
        borderRadius: 10,
        borderColor: '#fca635',
        backgroundColor: '#fca635'

    },
});

export default listProjectStyles;