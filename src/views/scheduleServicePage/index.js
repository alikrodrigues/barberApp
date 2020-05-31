import React, {useState, useEffect} from 'react';
import {Chip, TouchableRipple} from 'react-native-paper';
import styles from './styles';
import {View, FlatList} from 'react-native';
import Template from '../../components/template';
import options from '../../data';

function ScheduleServicePage({service}) {
  const [addMore, setAddMore] = useState(false);

  return (
    <Template title={'Agendamento'}>
      <View style={styles.container}>
        {!addMore ? (
          <>
            <Chip
              style={{marginHorizontal: 10, marginVertical: 5}}
              onPress={() => console.log('Pressed')}>
              {service.title}
            </Chip>
            <Chip
              style={styles.chipAddMore}
              icon={'plus'}
              onPress={() => setAddMore(current => setAddMore(!current))}>
              {'Mais serviços'}
            </Chip>
          </>
        ) : (
          <FlatList
            data={options}
            numColumns={2}
            keyExtractor={item => item.title}
            contentContainerStyle={{marginHorizontal: 10}}
            renderItem={rowData => (
              <Chip
                key={rowData.index}
                textStyle={styles.textStyleChips(
                  rowData.item.title,
                  service.title,
                )}
                style={{
                  marginHorizontal: 10,
                  marginVertical: 5,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                }}
                onPress={() => console.log('Pressed')}>
                {rowData.item.title}
              </Chip>
            )}
          />
        )}
      </View>
    </Template>
  );
}

export default ScheduleServicePage;
