import React, { useEffect, useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import MyProfileScreenStyles from '../Styles/MyProfileScreenStyles';
import auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/firestore';
import allStrings from '../string/allString';
import firestore from '@react-native-firebase/firestore';
import { useAppContextUpate } from '../appContext';

const MyProfileScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const update = useAppContextUpate()



  const handleLogout = () => {
    auth().signOut();
    console.log(":: User loged")
    update(true)
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        const ac = firestore().collection("userData").where("userEmail", "==", user.email)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              console.log("abc data", doc.data().userName);
              setName(doc.data().userName);

            });
          })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });
      }
    });

  }, []);

  return (
    <View style={MyProfileScreenStyles.mainView}>
      <Text style={MyProfileScreenStyles.profiletext}>{allStrings.inputPlaceholder.myProfile}</Text>
      <View style={MyProfileScreenStyles.card}>
        <Text></Text>
        <View>
          <Text></Text>
          <Text style={MyProfileScreenStyles.commontext}>{allStrings.inputPlaceholder.name}</Text>
          <View style={MyProfileScreenStyles.smallcard}>
            <Text style={MyProfileScreenStyles.margin}>{name}</Text>
          </View>
        </View>
        <View>
          <Text></Text>
          <Text></Text>
          <Text style={MyProfileScreenStyles.commontext}>{allStrings.inputPlaceholder.emailText}</Text>
          <View style={MyProfileScreenStyles.smallcard}>
            <Text style={MyProfileScreenStyles.margin}>{email}</Text>
          </View>
        </View>
      </View>
      <TouchableHighlight
        style={MyProfileScreenStyles.submit} onPress={() => handleLogout()}>
        <Text style={MyProfileScreenStyles.submitText}>{allStrings.inputPlaceholder.logout}</Text>
      </TouchableHighlight>
    </View>
  )
}

export default MyProfileScreen;