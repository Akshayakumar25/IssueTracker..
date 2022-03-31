import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import Toast from 'react-native-simple-toast';
import ManageTeammatesStyles from '../Styles/ManageTeammatesStyles';
import firestore from '@react-native-firebase/firestore';
import allStrings from '../string/allString';




const ManageTeammates = () => {
  const [member, setMember] = useState('');
  const [users, setUsers] = useState('');
  const [loading, setLoading] = useState(true);


  const addMember = async () => {
    const add = await firestore()
      .collection('Member')
      .add({
        MemberEmail: member
      });
    console.log("daree", add)
    if (add && add._documentPath && add._documentPath.id) {
      await firestore().collection('Member').doc(add._documentPath.id).update({
        documentId: add._documentPath.id
      })
    }
    toastMessage1();
  }


  useEffect(() => {
    const subscriber = firestore()
      .collection('Member')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setUsers(users);
      });
  }, []);

  const handleDeleteButton = async (item) => {
    const EreseData = await firestore()
      .collection('Member')
      .doc(item)
      .delete()
      .then(() => {
      });
  }



  const toastMessage1 = () => {
    Toast.show("Added a New Member Successfully")
  }

  const ToastMessage2 = () => {
    Toast.show("Removed A Member Successfully")
  }


  return (
    <View>
      <View>
        <Text style={ManageTeammatesStyles.text}>{allStrings.inputPlaceholder.manageTeammates}</Text>
      </View>
      <View style={ManageTeammatesStyles.manageEmail}>
        <View style={ManageTeammatesStyles.textInput}>
          <TextInput
            placeholder={allStrings.inputPlaceholder.enterEmail}
            value={member}
            onChangeText={(value) => setMember(value)}></TextInput>
        </View>
        <View style={ManageTeammatesStyles.view}>
          <Button title={allStrings.inputPlaceholder.add} color='#FF0303' onPress={() => addMember()} />
        </View>
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={ManageTeammatesStyles.card}>
            <View style={ManageTeammatesStyles.end}>
              <TouchableOpacity onPress={() => handleDeleteButton(item.documentId)}>
                <Image style={ManageTeammatesStyles.picture} source={require('../../incognito/assets/delete1.png')} />
              </TouchableOpacity>
            </View>
            <Text style={ManageTeammatesStyles.memberText}>{item.MemberEmail}</Text>
          </View>

        )}
      />
    </View>
  );
};

export default ManageTeammates;