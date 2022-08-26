import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Modal from "react-native-modal";

import { Button, Text } from "@rneui/themed";
import TradeCypto from './Trade-Crypto';

const ExchangeRates = (props) => {
  const [ratesData, setDataRates] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRate, setSelectedRate] = useState(null);

  useEffect(() => {
    if (props.rates) {
      const updateRates = Object.entries(props.rates).map((rate) => {
        return {
            name: rate[0],
            rawAmount: parseFloat(rate[1]),
            amount: parseFloat(rate[1]).toFixed(2)
        };
      });
      setDataRates(updateRates);
    }
  }, [props.rates]);

  const tradeCypto = (rate) => {
    setSelectedRate(rate);
    setModalVisible(true);
  };

  return (
    <View>
      {!props.loading ? 
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            {ratesData.map((rate, index) => 
            <View style={styles.listItem} key={index}>
              <Text style={styles.text}>{rate.name}/{props.currency}</Text>
              <Text style={styles.text}>{rate.amount}</Text>
              <Button title="Trade" onPress={() => tradeCypto(rate)} />
            </View>
            )}
          </ScrollView>
        </SafeAreaView>  
      :  
        <View style={{flex: 1, marginTop: 100}}>
          <ActivityIndicator />
          <Text style={{marginTop: 15, ...styles.text}}>Loading...</Text>
        </View>
      }
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        isVisible={modalVisible}
        style={{
          flex: 0,
          marginTop: 200,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      > 
        <TradeCypto currency={props.currency} rate={selectedRate} />
      </Modal>
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
  scrollView: {
    marginTop: 10,
  },
  text: {
    color : "white",
    fontSize: 20,
    marginBottom: 15
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});


export default ExchangeRates;