import React, {useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,FlatList,Image} from 'react-native';
import Toast from 'react-native-simple-toast';
import DeleteProjectStyles from '../Styles/DeleteProjectStyles';
import firestore from '@react-native-firebase/firestore';
import allStrings from '../string/allString';

const toast = () =>{
  Toast.show("Task Deleted Successfully")
}
const DeleteProject = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  const handleDeleteButton = async(item) =>{
    const EraseData = await firestore()
    .collection('CreateTask')
    .doc(item)
    .delete()
    .then(() => {
      toast();
    });
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

  return (
    <View style={DeleteProjectStyles.mainView}>
      <Text style={DeleteProjectStyles.deletetext}>Delete Task</Text>
        <FlatList
          data={users}
          renderItem={({item})=>(
            <View style={DeleteProjectStyles.card}>
              <View style={DeleteProjectStyles.marginS}>
                  <TouchableOpacity onPress={()=>handleDeleteButton(item.documentId)}>
                     <Image style={DeleteProjectStyles.picture} source={require('../../incognito/assets/delete1.png')}/>
                  </TouchableOpacity>
                  <Text style={DeleteProjectStyles.commomSpace}>{allStrings.inputPlaceholder.taskName}{item.taskname}</Text> 
                  <Text style={DeleteProjectStyles.commomSpace}>{allStrings.inputPlaceholder.jiraNumber}{item.jiraNumber}</Text>
                  <Text style={DeleteProjectStyles.commomSpace}>{allStrings.inputPlaceholder.developerEmail}{item.developerEmail}</Text>
                  <Text style={DeleteProjectStyles.commomSpace}>{allStrings.inputPlaceholder.developerName}{item.developerName}</Text>
                  <Text style={DeleteProjectStyles.commomSpace}>{allStrings.inputPlaceholder.taskDiscription}{item.taskDiscription}</Text>
                  <Text style={DeleteProjectStyles.commomSpace}>{allStrings.inputPlaceholder.documentId}{item.documentId}</Text>
              </View>
            </View>
          )}
        />
    </View>
  )
};


export default DeleteProject;