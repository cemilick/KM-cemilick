import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from 'react-native-elements';
import axios from 'axios';
import MyModal from '../../components/Modal';
import { ScrollView } from 'react-native-gesture-handler';


export default function Index(props) {

  const [username, setUsername] = useState(['']);
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [modalVisible, setModalVisible] = useState(false)

  const createUser = async () => {
    try {
      const body = {
        name: username,
        job: email,
      };
      const res = await axios.post(`https://reqres.in/api/users`, body, {
        validateStatus: status => status < 501,
      });
      console.log(res)
      setModalVisible(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView>
      <MyModal label="Daftar Akun" modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={props.navigation} target={'Login'} />
      <View style={{backgroundColor: '#b80617', alignItems: 'center', height: Dimensions.get('window').height, justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
            <Image resizeMode='contain' source={require('../../assets/images/movie.png')} style={{width: 50, height: 50}} />
            <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 30, marginTop: 15, marginLeft: 9}}>My Movie Application</Text>
        </View>
        <View style={{width: 300, alignItems: 'center'}}>
          <Input 
            placeholder='Email' 
            onChangeText={(text) => setEmail(text) }
            placeholderTextColor='lightgray'
            inputStyle={{backgroundColor: 'white', borderRadius: 10}}/>
          <Input 
            placeholder='Username' 
            onChangeText={(text) => setUsername(text) }
            placeholderTextColor='lightgray'
            inputStyle={{backgroundColor: 'white', borderRadius: 10}}/>
          <Input 
            placeholder='Password' 
            secureTextEntry={true} 
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor='lightgray'
            inputStyle={{backgroundColor: 'white', borderRadius: 10}} />
          <Input 
            placeholder='First Name' 
            onChangeText={(text) => setFirstName(text) }
            placeholderTextColor='lightgray'
            inputStyle={{backgroundColor: 'white', borderRadius: 10}} />
          <Input 
            placeholder='Last Name' 
            onChangeText={(text) => setLastName(text) }
            placeholderTextColor='lightgray'
            inputStyle={{backgroundColor: 'white', borderRadius: 10}} />
          <Button 
            title={'Register Now!'} 
            buttonStyle={{
              width: 200,
              backgroundColor: 'black',
              borderRadius: 5}}
            onPress={createUser}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{color: 'white'}}>Already Have An Account?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Login here!</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}