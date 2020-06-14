import React, {useState} from 'react';
import Template from '../../components/template';
import {View} from 'react-native';
import {Title, TextInput} from 'react-native-paper';
import CustomButton from '../../components/customButton';
import {Actions} from 'react-native-router-flux';
import LottieView from 'lottie-react-native';

const RegisterCustomer = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    setTimeout(() => {
      Actions.mainPage();
    }, 5000);

    return (
      <LottieView
        source={require('../../assets/animations/sucess.json')}
        autoPlay
        loop
      />
    );
  }

  return (
    <Template title={'Cadastro'}>
      <Title style={{textAlign: 'center', marginVertical: 10, color: '#fff'}}>
        Insira seus dados
      </Title>
      <View style={{flex: 1, alignSelf: 'center', width: '90%'}}>
        <TextInput
          style={{marginVertical: 10}}
          label="Nome"
          onChangeText={text => {}}
        />
        <TextInput
          style={{marginVertical: 10}}
          label="Telefone"
          onChangeText={text => {}}
        />
      </View>
      <CustomButton
        title={'Agendar'}
        onPress={() => {
          setShowSuccess(true);
        }}
      />
    </Template>
  );
};

export default RegisterCustomer;
