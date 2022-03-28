
import React from 'react';
import { Text, View,TouchableHighlight} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MyProfileScreenStyles from '../Styles/MyProfileScreenStyles';
import auth from '@react-native-firebase/auth'

const handleLogout = () =>{
  auth().signOut()
}

const MyProfileScreen = () => {
  return (
    <View style={MyProfileScreenStyles.mainView}>
      <Text style={MyProfileScreenStyles.profiletext}> My Profile</Text>
      <View style={MyProfileScreenStyles.card}>
        <Text></Text>
        <View>
          <Text></Text>
          <Text style={MyProfileScreenStyles.commontext}> Name</Text>
          <View style={MyProfileScreenStyles.smallcard}>
            <Text style={MyProfileScreenStyles.margin}>Akshayakumar</Text>
          </View>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
          <Text style={MyProfileScreenStyles.commontext}> Email</Text>
          <View style={MyProfileScreenStyles.smallcard}>
            <Text style={MyProfileScreenStyles.margin}>akshaya.s@synclovis.com</Text>
          </View>
        </View>
      </View>
      <TouchableHighlight
              style={MyProfileScreenStyles.submit} onPress={()=>handleLogout()}>
              <Text style={MyProfileScreenStyles.submitText}>Logout</Text>
          </TouchableHighlight>
    </View>
  )
}

export default MyProfileScreen;