import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Input } from 'react-native-elements';
import axios from 'axios';
import MyModal from '../../components/Modal';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Index(props) {

  const [email, setEmail] = useState(['']);
  const [password, setPassword] = useState('');

  const [modalVisible, setModalVisible] = useState(false)

  const createUser = async () => {
    //   email:
    //   eve.holt@reqres.in
    //   password:
    //   cityslicka
    try {
      const body = {
        email: email,
        password: password,
      };
      const res = await axios.post(`https://reqres.in/api/login`,body).then(() => {
        console.log('res')
        setModalVisible(true)
      });
    } catch (error) {
      console.log('Gagal Login!');
    }
  }

  return (
    <ScrollView>
      <MyModal label="Login" modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={props.navigation} target='Movie' />
      <View style={{backgroundColor: '#b80617', alignItems: 'center', height: Dimensions.get('window').height}}>
        <View style={{marginTop: 70}}>
            <Image resizeMode='contain' source={require('../../assets/images/movie.png')} style={{width: 200, height: 200}} />
            <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 30}}>My Movie Application</Text>
        </View>
        <View style={{width: 300, marginTop: 70, alignItems: 'center'}}>
            <Input 
                placeholder='Email' 
                onChangeText={(text) => setEmail(text) }
                placeholderTextColor='lightgray'
                inputStyle={{backgroundColor: 'white', borderRadius: 10}}
                 />
            <Input 
                placeholder='Password' 
                secureTextEntry={true} 
                onChangeText={(text) => setPassword(text)} 
                placeholderTextColor='lightgray'
                inputStyle={{backgroundColor: 'white', borderRadius: 10}}/>
            <Button 
            title={'Login Now!'} 
            buttonStyle={{
                width: 200,
                backgroundColor: 'black',
                borderRadius: 5}}
            onPress={createUser}
            />
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{color: 'white'}}>Didn't Have Any Account?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                <Text style={{fontWeight: 'bold', color: 'white'}}>Create new one!</Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}