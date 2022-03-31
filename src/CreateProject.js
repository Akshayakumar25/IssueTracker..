import React, { useState } from 'react';
import { View, Text, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import Toast from 'react-native-simple-toast';
import CreateProjectStyles from '../Styles/CreateProjectStyles';
import firestore from '@react-native-firebase/firestore';
import allStrings from '../string/allString';




const CreateProject = () => {
  const [taskName, setTaskName] = useState('')
  const [jiraNumber, setJiraNumber] = useState('')
  const [developerEmail, setDeveloperEmail] = useState('')
  const [developerName, setDeveloperName] = useState('')
  const [taskDiscription, setTaskDiscription] = useState('')

  const ToastMessage = () => {
    Toast.show("New Task Created Successfully")
  }

  const createNew = async () => {
    const taskData = await firestore()
      .collection('CreateTask')
      .add({
        taskname: taskName,
        jiraNumber: jiraNumber,
        developerEmail: developerEmail,
        developerName: developerName,
        taskDiscription: taskDiscription,
        Taskstatus: null
      });
    if (taskData && taskData._documentPath && taskData._documentPath.id) {
      await firestore().collection('CreateTask').doc(taskData._documentPath.id).update({
        documentId: taskData._documentPath.id
      })
    }
    ToastMessage();
  }



  return (
    <KeyboardAvoidingView style={CreateProjectStyles.mainView} behavior="position">
      <View>
        <Text style={CreateProjectStyles.text}>{allStrings.inputPlaceholder.createTask}</Text>
      </View>
      <View style={CreateProjectStyles.textInput}>
        <TextInput
          placeholder={allStrings.inputPlaceholder.taskNamee1}
          value={taskName}
          onChangeText={(value) => setTaskName(value)}>
        </TextInput>
      </View>
      <View style={CreateProjectStyles.key}>
        <TextInput
          placeholder={allStrings.inputPlaceholder.jira1}
          value={jiraNumber}
          onChangeText={(value) => setJiraNumber(value)}>
        </TextInput>
      </View>
      <View style={CreateProjectStyles.textInput}>
        <TextInput
          placeholder={allStrings.inputPlaceholder.developerEmail1}
          value={developerEmail}
          onChangeText={(value) => setDeveloperEmail(value)}>
        </TextInput>
      </View>
      <View style={CreateProjectStyles.textInput}>
        <TextInput
          placeholder={allStrings.inputPlaceholder.developerName1}
          value={developerName}
          onChangeText={(value) => setDeveloperName(value)}>
        </TextInput>
      </View>
      <View style={CreateProjectStyles.textInput}>
        <TextInput
          placeholder={allStrings.inputPlaceholder.taskDiscription1}
          value={taskDiscription}
          onChangeText={(value) => setTaskDiscription(value)}>
        </TextInput>
      </View>
      <View style={CreateProjectStyles.view}>
        <Button title={allStrings.inputPlaceholder.createNewTaskButtonText} color='#FF0303' onPress={() => createNew()} />
      </View>
    </KeyboardAvoidingView>
  );
};


export default CreateProject;