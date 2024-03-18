import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  restaurantName: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    width: '100%',
    padding: 10,
  },
  restaurantdescription: {
    fontSize: 16,
    color: 'grey',
  },
});

function DetailsScreen({route, navigation}) {
  const {store} = route.params;

  return (
    <View style={styles.mainContainer}>
      <Image source={store.image} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{store.name}</Text>
      <Text style={styles.restaurantdescription}>{store.description}</Text>
      {/* <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      /> */}
    </View>
  );
}

export default DetailsScreen;
