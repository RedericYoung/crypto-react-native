import React, { useEffect, useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { Text } from "@rneui/themed";

import CurrencySelection from './src/components/Currency-Selection';
import ExchangeRates from './src/components/Exchange-Rates';

const App = () => {
  const [currency, selectCurrency] = useState('USD');
  const [rates, setExhangeRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    selectCurrency('USD');
    getBitCoinPrice(currency);
  }, []);

  const getBitCoinPrice = async(currency) => {
    selectCurrency(currency);
    setLoading(true);
    await fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${currency}`)
      .then((response) => response.json())
      .then(({ data }) => {
        setLoading(false);
        setExhangeRate(data.rates);
      });
  }; 

  return (
    <View style={styles.container}>
      <Text h3 style={styles.text}>Crypto Exchange</Text>
      <CurrencySelection selectCurrency={getBitCoinPrice} />
      <ExchangeRates currency={currency} loading={loading} rates={rates} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333232',
    paddingTop: 75,
    alignItems: 'center'
  },
  text: {
    color : "white",
  },
  subHeader: {
    backgroundColor : "#2089dc",
    
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }
});

export default App;