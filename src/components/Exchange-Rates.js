import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { Button, Text } from "@rneui/themed";

const ExchangeRates = (props) => {
  const [ratesData, setDataRates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.rates) {
      const updateRates = Object.entries(props.rates).map((rate) => {
        return {
            name: rate[0],
            amount: parseFloat(rate[1]).toFixed(2)
        };
      });
      setDataRates(updateRates);
    }
  }, [props.rates]);

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {ratesData.map((rate, index) => 
          <View style={styles.listItem} key={index}>
            <Text style={styles.text}>{rate.name}/{props.currency}</Text>
            <Text style={styles.text}>{rate.amount}</Text>
            <Button title="Buy" color={'#04AA6D'}/>
          </View>
          )}
        </ScrollView>
      </SafeAreaView>   
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  text: {
    color : "white",
    fontSize: 22,
    marginBottom: 15
  },
});


export default ExchangeRates;