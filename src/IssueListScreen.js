import React, {useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,StyleSheet,FlatList ,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import IssueListScreenStyles from '../Styles/IssueListScreenStyles';
import firestore from '@react-native-firebase/firestore';
import allStrings from '../string/allString';
import Toast from 'react-native-simple-toast';

const IssueListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const[data,setData] = useState(false);
  const[text,setText]=useState(null);

  const toastMessege = () =>{
    Toast.show("Updated Task Status Successfully")
  }

  
    useEffect(() => {
      const subscriber = firestore()
        .collection('CreateTask')
        .onSnapshot(querySnapshot => {
          const users = [];
          querySnapshot.forEach(documentSnapshot => {
            users.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });
          setUsers(users);
          setLoading(false);
        });
    }, []);

    const handleTaskStatus = (item) =>{
      if(text == null){
        setText('Completed')
      }else if(text == 'Completed'){
        setText('Reopened')
      }else if(text == 'Reopened'){
        setText('Completed')
      }
      updateTaskStatus(item);
    }

    const updateTaskStatus = async(item) =>{
      const taskData = await firestore()
      .collection('CreateTask')
      .doc(item)
      .update({
         Taskstatus:text
      })
      toastMessege();
    }

  return (
    <View style={IssueListScreenStyles.mainView}>
      <Text style={IssueListScreenStyles.text}>IssueList</Text>
      <View>
        <FlatList
          data={users}
          renderItem={({item})=>(
            <View style={IssueListScreenStyles.card}>
              <View>
                  <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.taskName}{item.taskname}</Text>
                  <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.jiraNumber}{item.jiraNumber}</Text>
                  <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.developerEmail}{item.developerEmail}</Text>
                  <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.developerName}{item.developerName}</Text>
                  <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.taskDiscription}{item.taskDiscription}</Text>
                  <Text style={IssueListScreenStyles.commommargin}>{allStrings.inputPlaceholder.documentId}{item.documentId}</Text>
                <View style={IssueListScreenStyles.flexStyle}>
                <TouchableOpacity style={IssueListScreenStyles.button2} onPress={()=>handleTaskStatus(item.documentId)}>
                    <Text style={IssueListScreenStyles.padding}>{allStrings.inputPlaceholder.updateTaskStatusButtonText}</Text>
                </TouchableOpacity>
                <Text style={IssueListScreenStyles.statusText}>{item.Taskstatus}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default IssueListScreen;