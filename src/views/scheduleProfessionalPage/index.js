import React, {useState, useContext} from 'react';
import Template from '../../components/template';
import {Title, Snackbar} from 'react-native-paper';
import {View, FlatList} from 'react-native';
import CustomAvatar from '../../components/customAvatar';
import horarios from '../../data/horarios';
import CustomChip from '../../components/customChip';
import styles from './styles';
import CustomButton from '../../components/customButton';
import {Actions} from 'react-native-router-flux';
import {ProfessionalContext} from '../../context/Professional';
import professionals from '../../data/professionals';

const ScheduleProfessionalPage = () => {
  const {professional} = useContext(ProfessionalContext);

  return (
    <Template title={'Profissionais'} subtitle={'disponiveis'}>
      <Title style={{textAlign: 'center', marginTop: 10, color: '#fff'}}>
        Selecione um profissional
      </Title>
      <View style={styles.containerProfessional}>
        {professionals.map(item => (
          <CustomAvatar key={item.id} professional={item} />
        ))}
      </View>
      {professional && (
        <>
          <FlatList
            data={professional.shifts}
            numColumns={3}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.containerShifts}
            renderItem={rowData => (
              <CustomChip key={rowData.index} item={rowData.item} />
            )}
          />
          <Snackbar
            visible={!professional.shifts || professional.shifts === []}
            // onDismiss={this._onDismissSnackBar}
            action={{
              label: 'Undo',
              onPress: () => {
                // Do something
              },
            }}>
            Oppsss... Este profissional não tem mais horário disponível.
          </Snackbar>
        </>
      )}
      <CustomButton onPress={() => {}} />
    </Template>
  );
};

export default ScheduleProfessionalPage;
