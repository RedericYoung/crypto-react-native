import React, { useEffect, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { ButtonGroup } from '@rneui/themed'

const CurrencySelection = (props) => {
  const Exchanges = ['USD', 'BTC', 'ETH'];
  const [selectedIndex, setIndex] = useState(0);

  useEffect(() => {
    props.selectCurrency(Exchanges[selectedIndex]);
  }, [selectedIndex]);

  return (
    <View style={styles.container}>
      <ButtonGroup
        buttons={Exchanges}
        selectedIndex={selectedIndex}
        onPress={(value) => {setIndex(value)}}
        containerStyle={{ 
          marginBottom: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0, 
    padding: 10,
    width: '100%',
    marginTop: 20
  }
});

export default CurrencySelection;