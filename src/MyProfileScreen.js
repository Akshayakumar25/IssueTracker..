import React, { useEffect, useState } from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, Image, Modal } from 'react-native';
import MyProfileScreenStyles from '../Styles/MyProfileScreenStyles';
import auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/firestore';
import allStrings from '../string/allString';
import firestore from '@react-native-firebase/firestore';
import { useAppContextUpate } from '../appContext';


const MyProfileScreen = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [modal, setModal] = useState(false)
  const [edit, setEdit] = useState(false)
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
              setRole(doc.data().role);

            });
          })
          .catch(function (error) {
            console.log("Error getting documents: ", error);
          });
      }
    });

  }, []);

  const handleEditButton = () => {
    setEdit(true)
  }

  const handleCloseButton = () => {
    setEdit(false)
  }
  return (
    <View style={MyProfileScreenStyles.mainView}>
      <Modal visible={edit}>
        <Text>Hello</Text>
        <View style={MyProfileScreenStyles.imageView}>
          <TouchableOpacity onPress={() => handleCloseButton()}>
            <Image style={MyProfileScreenStyles.crossPicture} source={require('../../incognito/assets/cross2.jpg')} />
          </TouchableOpacity>
        </View>
      </Modal>
      <Text style={MyProfileScreenStyles.profiletext}>{allStrings.inputPlaceholder.myProfile}</Text>
      <Text style={MyProfileScreenStyles.roleText}>{allStrings.inputPlaceholder.roleText}{role}</Text>
      <View style={MyProfileScreenStyles.card}>
        <Text></Text>
        <View>
          <Text></Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={MyProfileScreenStyles.commontext}>{allStrings.inputPlaceholder.name}</Text>
            <TouchableOpacity onPress={() => handleEditButton()} >
              <Image source={require('../../incognito/assets/edit.png')} style={MyProfileScreenStyles.editImage} />
            </TouchableOpacity>
          </View>
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