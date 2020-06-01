import React, {useState, useEffect} from 'react';
import {Chip} from 'react-native-paper';
import styles from './styles';
import {useServicesList} from '../../context/Services';
import { Actions } from 'react-native-router-flux';

function CustomChip({item}) {
  const {services, setServices} = useServicesList();
  const [hasInSelected, setHasIn] = useState(false);
  const [index, setIndex] = useState(null);

  useEffect(hasInSelecteds, []);

  function hasInSelecteds() {
    var found = services.findIndex(function(element) {
      return element.title === item.title;
    });

    if (found >= 0) {
      setIndex(found);
      setHasIn(true);
    } else {
      setHasIn(false);
    }
  }

  return (
    <>
      <Chip
        textStyle={styles.textStyleChips(hasInSelected)}
        style={styles.styleChips(hasInSelected)}
        onPress={() => {
          let copyServices = services;
          if (hasInSelected) {
            copyServices.splice(index);
          } else {
            copyServices.push(item);
          }
          if (copyServices.length === 0) Actions.pop();
          setServices(copyServices);
          hasInSelecteds();
        }}>
        {item.title}
      </Chip>
    </>
  );
}

export default CustomChip;
