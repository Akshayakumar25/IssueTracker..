import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import HomeScreenStyles from '../Styles/HomeScreenStyles';
import allStrings from '../string/allString';


const HomeScreen = () => {
  const [members, setMembers] = useState('');
  const [issue, setIssue] = useState('');
  const [solvedIssue, setsolvedIssue] = useState('');
  const [reOpened, setReopened] = useState('')
  const [pendingIssue, setPendingIssue] = useState('')


  const totalMembers = () => {
    const members = firestore().collection('Member').get().then(function (querySnapshot) {
      console.log("Hello", querySnapshot.size);
      setMembers(querySnapshot.size);

    })
  }
  const totalIssue = () => {
    const issues = firestore().collection('CreateTask').get().then(function (querySnapshot) {
      console.log("Hey", querySnapshot.size);
      setIssue(querySnapshot.size);

    })
  }

  const solved = () => {
    const solvedIssue = firestore().collection('CreateTask').where('Taskstatus', '==', 'Completed').get().then(function (querySnapshot) {
      console.log("done", querySnapshot.size);
      setsolvedIssue(querySnapshot.size);

    })
  }

  const reopened = () => {
    const open = firestore().collection('CreateTask').where('Taskstatus', '==', 'Reopened').get().then(function (querySnapshot) {
      console.log("donedone", querySnapshot.size);
      setReopened(querySnapshot.size);

    })
  }

  const pending = () => {
    const pendingIssue = firestore().collection('CreateTask').where('Taskstatus', '==', null).get().then(function (querySnapshot) {
      console.log("donedone", querySnapshot.size);
      setPendingIssue(querySnapshot.size);

    })
  }

  useEffect(() => {
    totalMembers();
    totalIssue();
    solved();
    reopened();
    pending();

  }, []);


  return (
    <View>
      <View style={HomeScreenStyles.mainView}>
        <View style={HomeScreenStyles.border}>
          <View style={HomeScreenStyles.flex}>
            <Image style={HomeScreenStyles.picture} source={require('../../incognito/assets/member.png')} />
            <View>
              <Text style={HomeScreenStyles.text}>{allStrings.inputPlaceholder.totalMembers}</Text>
              <Text></Text>
              <Text style={HomeScreenStyles.text1}>{members}</Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={HomeScreenStyles.border}>
          <View style={HomeScreenStyles.flex}>
            <Image style={HomeScreenStyles.picture} source={require('../../incognito/assets/issue.png')} />
            <View>
              <Text style={HomeScreenStyles.text}>{allStrings.inputPlaceholder.totalIssue}</Text>
              <Text></Text>
              <Text style={HomeScreenStyles.text1}>{issue}</Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={HomeScreenStyles.border}>
          <View style={HomeScreenStyles.flex}>
            <Image style={HomeScreenStyles.picture} source={require('../../incognito/assets/solved1.png')} />
            <View>
              <Text style={HomeScreenStyles.text3}>{allStrings.inputPlaceholder.solvedIssue}</Text>
              <Text></Text>
              <Text style={HomeScreenStyles.text1}>{solvedIssue}</Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={HomeScreenStyles.border}>
          <View style={HomeScreenStyles.flex}>
            <Image style={HomeScreenStyles.picture} source={require('../../incognito/assets/pending.png')} />
            <View>
              <Text style={HomeScreenStyles.text3}>{allStrings.inputPlaceholder.pendingIssue}</Text>
              <Text></Text>
              <Text style={HomeScreenStyles.text1}>{pendingIssue}</Text>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={HomeScreenStyles.border}>
          <View style={HomeScreenStyles.flex}>
            <Image style={HomeScreenStyles.picture} source={require('../../incognito/assets/reopened1.png')} />
            <View>
              <Text style={HomeScreenStyles.text3}>{allStrings.inputPlaceholder.reOpendedIssue}</Text>
              <Text></Text>
              <Text style={HomeScreenStyles.text1}>{reOpened}</Text>
              <Text></Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

