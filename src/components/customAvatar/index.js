import React, {useContext} from 'react';
import {Avatar, Title} from 'react-native-paper';
import {ProfessionalContext} from '../../context/Professional';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ShiftsContext} from '../../context/Shifts';

const CustomAvatar = ({professional}) => {
  const {saveProfessional} = useContext(ProfessionalContext);
  const {saveShift} = useContext(ShiftsContext);

  return (
    <TouchableOpacity
      onPress={() => {
        saveProfessional(professional);
        saveShift(null);
      }}
      style={{
        marginVertical: 8,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Avatar.Image
        size={100}
        source={require('../../assets/images/hipster.png')}
      />
      <Title style={{color: '#fff'}}>{professional.name}</Title>
    </TouchableOpacity>
  );
};

export default CustomAvatar;
