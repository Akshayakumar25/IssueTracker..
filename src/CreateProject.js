import React,{useState,useEffect} from 'react';
import { View, Text,TextInput,Button,KeyboardAvoidingView } from 'react-native';
import Toast from 'react-native-simple-toast';
import CreateProjectStyles from '../Styles/CreateProjectStyles';
import firestore from '@react-native-firebase/firestore';

const CreateProject = () => {
   const[taskName,setTaskName]=useState('')
   const[jiraNumber,setJiraNumber]=useState('')
   const[developerEmail,setDeveloperEmail]=useState('')
   const[developerName,setDeveloperName]=useState('')
   const[taskDiscription,setTaskDiscription]=useState('')
   const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

   const ToastMessage = () =>{
      Toast.show("New Task Created Successfully")
    }

   const createTask = async() =>{
      const taskData = await firestore()
      .collection('CreateTask')
      .add({taskname:taskName,
        jiraNumber:jiraNumber,
        developerEmail:developerEmail,
        developerName:developerName,
        taskDiscription:taskDiscription,
      });
      console.log(":: >> doc id ",taskData._documentPath.id)
      if(taskData && taskData._documentPath &&taskData._documentPath.id){
      await firestore().collection('CreateTask').doc(taskData._documentPath.id).update({
        documentId:taskData._documentPath.id
      })
    }
        ToastMessage();
    }

    return (
         <KeyboardAvoidingView style={CreateProjectStyles.mainView} behavior="position">
            <View>
               <Text style={CreateProjectStyles.text}>Create new task</Text>
            </View>
            <View style={CreateProjectStyles.textInput}>
               <TextInput 
                   placeholder='Task Name'
                   value={taskName}
                   onChangeText={(value) => setTaskName(value)}>
               </TextInput>
            </View>
            <View style={CreateProjectStyles.key}>
               <TextInput 
                   placeholder='Jira Number'
                   value={jiraNumber}
                   onChangeText={(value) => setJiraNumber(value)}>
               </TextInput>
            </View>
            <View style={CreateProjectStyles.textInput}>
               <TextInput 
                   placeholder='Developer Email'
                   value={developerEmail}
                   onChangeText={(value) => setDeveloperEmail(value)}>
               </TextInput>
            </View>
            <View style={CreateProjectStyles.textInput}>
               <TextInput 
                   placeholder='Developer name'
                   value={developerName}
                   onChangeText={(value) => setDeveloperName(value)}>
               </TextInput>
            </View>
            <View style={CreateProjectStyles.textInput}>
                <TextInput 
                    placeholder='Task Discription'
                    value={taskDiscription}
                    onChangeText={(value) => setTaskDiscription(value)}>
                </TextInput>
            </View> 
            <View style={CreateProjectStyles.view}>
                <Button title="Create Task" color='#FF0303' onPress={createTask}/>
            </View> 
          </KeyboardAvoidingView>
    );
  };


export default CreateProject;