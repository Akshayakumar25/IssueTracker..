import React,{useState} from 'react';
import { View, Text,TextInput,Button,KeyboardAvoidingView} from 'react-native';
import Toast from 'react-native-simple-toast';
import EditStyles from '../Styles/EditStyles';
import firestore from '@react-native-firebase/firestore';
import allStrings from '../string/allString';

const toast = () =>{
   Toast.show("Project Edited Successfully")
 }
 
const Edit = ({ route }) => {
      const[taskName,setTaskName]=useState(route.params.data.taskname);
      const[jiraNumber,setJiraNumber]=useState(route.params.data.jiraNumber);
      const[developerEmail,setDeveloperEmail]=useState(route.params.data.developerEmail);
      const[developerName,setDeveloperName]=useState(route.params.data.developerName);
      const[taskDiscription,setTaskDiscription]=useState(route.params.data.taskDiscription);
      const[documentId]=useState(route.params.data.documentId);
      


  const editTask = async() =>{
    const taskData = await firestore()
    .collection('CreateTask')
    .doc(documentId)
    .update({
       taskname:taskName,
       jiraNumber:jiraNumber,
       developerEmail:developerEmail,
       developerName:developerName,
       taskDiscription:taskDiscription,
    })
    toast();
  }

  
    return (
         <KeyboardAvoidingView behavior='position' style={EditStyles.mainView}>
            <View>
               <Text style={EditStyles.text}>{allStrings.inputPlaceholder.editTask}</Text>
            </View>
            <View style={EditStyles.textInput}>
               <TextInput 
                     value={taskName}
                     onChangeText={(value) => setTaskName(value)}>
                </TextInput>
            </View>
            <View style={EditStyles.key}>
               <TextInput 
                      value={jiraNumber}
                      onChangeText={(value) => setJiraNumber(value)}>
               </TextInput>
            </View>
            <View style={EditStyles.textInput}>
               <TextInput 
                      value={developerEmail}
                      onChangeText={(value) => setDeveloperEmail(value)}>
               </TextInput>
            </View>
            <View style={EditStyles.textInput}>
               <TextInput 
                      value={developerName}
                      onChangeText={(value) => setDeveloperName(value)}>
                </TextInput>
            </View>
            <View style={EditStyles.textInput}>
                <TextInput 
                       value={taskDiscription}
                       onChangeText={(value) => setTaskDiscription(value)}>
                </TextInput>
            </View> 
            <View style={EditStyles.view}>
                <Button title={allStrings.inputPlaceholder.editTask} color='#FF0303' onPress={editTask}/>
            </View> 
          </KeyboardAvoidingView>
    );
  };

 

export default Edit;