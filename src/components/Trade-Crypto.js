import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';

import { ButtonGroup, Image, Text } from "@rneui/themed";

const TradeCypto = (props) => {
	const { width } = Dimensions.get('window'); 
	const buttons = ['Buy', 'Sell'];
	const today = new Date();
  
  return (
    <View style={{...styles.modalView, width: width * .8}}>
			<Text h3>{props.rate.name}/{props.currency}</Text>
			<View style={styles.modalPriceContent}>
				<Text h4>Current Price:</Text>
				<Text h4>{props.rate.rawAmount}</Text>
			</View>
			<Image
				source={{ uri: 'https://public.bnbstatic.com/image/cms/article/body/202203/e00e5478a38b0af598cc8b47f8c40ee8.png' }}
				style={{ width: 300, height: 200, marginBottom: 20}}
				PlaceholderContent={<ActivityIndicator />}
			/>
			<View style={styles.tradeButtonsView}>
				<ButtonGroup
					onPress={() => {}}
					selectedIndex={0}
					buttons={buttons}
					containerStyle={{height: 40}}
				/>
			</View>
		</View>
  );
};

const styles = StyleSheet.create({
  modalView: {
		flex: 0,
		borderRadius: 10,
		paddingVertical: 20,
    backgroundColor: "white",
		width: 200,
		justirfyContent: 'center',
		alignItems: 'center'
  },
	modalPriceContent: {
		paddingVertical: 10,
		marginVertical: 20,
		flex: 0,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	tradeButtonsView: {
		flex: 0, 
		justifyContent: 'center', 
		alignItems: 'center'
	}
});


export default TradeCypto;