import React, {useState} from 'react';
import {Chip, Title} from 'react-native-paper';
import styles from './styles';
import {View, FlatList, Text} from 'react-native';
import Template from '../../components/template';
import options from '../../data';
import CustomChip from '../../components/customChip';
import {useServicesList} from '../../context/Services';

function ScheduleServicePage({service}) {
  const [addMore, setAddMore] = useState(false);
  const {services} = useServicesList();

  return (
    <Template title={'Agendamento'}>
      <View style={styles.container}>
        <FlatList
          data={addMore ? options : services}
          numColumns={2}
          keyExtractor={item => item.title}
          contentContainerStyle={{marginHorizontal: 10}}
          renderItem={rowData => (
            <CustomChip key={rowData.index} item={rowData.item} />
          )}
        />
        <Chip
          style={styles.chipAddMore}
          icon={addMore ? 'arrow-up' : 'plus'}
          onPress={() => setAddMore(current => setAddMore(!current))}>
          {addMore ? 'Voltar' : 'Mais serviços'}
        </Chip>
        <View style={styles.containerServiceSelected}>
          <Text>{services[0].title}</Text>
          <Text>{services[1]?.title}</Text>
        </View>
      </View>
    </Template>
  );
}

export default ScheduleServicePage;
