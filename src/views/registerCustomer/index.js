import React from 'react';
import Template from '../../components/template';
import {View} from 'react-native';
import {Title, TextInput, Button} from 'react-native-paper';
import CustomButton from '../../components/customButton';

const RegisterCustomer = () => {
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
      <CustomButton title={'Agendar'} onPress={() => {}} />
    </Template>
  );
};

export default RegisterCustomer;
