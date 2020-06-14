import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

const CustomButton = ({title, ...props}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        color={'#fff'}
        mode="outlined"
        style={{borderColor: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
        {...props}>
        {title ? title : 'Próximo'}
      </Button>
    </View>
  );
};

export default CustomButton;
