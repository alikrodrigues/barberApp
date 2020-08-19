import React, {useState, useContext, useEffect} from 'react';
import Template from '../../components/template';
import {Title, Snackbar} from 'react-native-paper';
import {View, FlatList} from 'react-native';
import CustomAvatar from '../../components/customAvatar';
import CustomChip from '../../components/customChip';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {ProfessionalContext} from '../../context/Professional';
import api from '../../services/api';
// import professionals from '../../data/professionals';

const ScheduleProfessionalPage = ({selectedDay}) => {
  const {professional} = useContext(ProfessionalContext);
  const [professionals, setProfessionals] = useState(null);

  useEffect(() => {
    let dayOfWeek = selectedDay.getDay();
    api.get(`collaborators/free/${dayOfWeek}`).then(response => {
      if (response.status === 200) {
        setProfessionals(response.data);
      }
    });
  }, [selectedDay]);

  return (
    <Template title={'Profissionais'} subtitle={'disponíveis'}>
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
              <CustomChip
                key={rowData.index}
                item={rowData.item}
                onPress={() => {
                  Actions.registerCustomer();
                }}
              />
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
    </Template>
  );
};

export default ScheduleProfessionalPage;
