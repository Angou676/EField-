import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import bookImg1 from '../assets/bookImg1.jpeg';
import bookImg2 from '../assets/bookImg2.jpg';
import bookImg3 from '../assets/bookImg3.jpeg';
import bookImg4 from '../assets/bookImg4.jpeg';
import bookImg5 from '../assets/bookImg5.jpeg';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#444444',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  largerText: {
    fontSize: 32, // Adjust the font size as needed
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flex: 1,
    marginLeft: 100,
    color:'black'
  },
  mainContainer: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  restaurantImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  restaurantName: {
    position: 'absolute', // Position the text absolutely
    bottom: 0, // Adjust as needed to position the text
    left: 0, // Adjust as needed to position the text
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

function HomeScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const booksStoreList = [
    {
      id: '1',
      name: 'Jack Book Store',
      image: bookImg1,
      description: `
      Welcome to the Jack Book Store, where every page holds a new adventure and every corner whispers tales waiting to be discovered. Nestled in the heart of our bustling city, The Book Haven is not just a store; it's a sanctuary for bibliophiles, a haven for the curious, and a refuge for the weary soul.

      Step through our doors and embark on a journey through time and space, guided by the scent of freshly printed pages and the soft rustle of turning leaves. Our shelves bow under the weight of knowledge, offering a treasure trove of literature spanning genres and eras. From timeless classics to contemporary bestsellers, from gripping mysteries to heartwarming romances, there's something for every reader within our walls.
      `,
    },
    {
      id: '2',
      name: 'All in One Book Store',
      image: bookImg2,
      description: `
      Welcome to the All in One Book Store, where every page holds a new adventure and every corner whispers tales waiting to be discovered. Nestled in the heart of our bustling city, The Book Haven is not just a store; it's a sanctuary for bibliophiles, a haven for the curious, and a refuge for the weary soul.

      Step through our doors and embark on a journey through time and space, guided by the scent of freshly printed pages and the soft rustle of turning leaves. Our shelves bow under the weight of knowledge, offering a treasure trove of literature spanning genres and eras. From timeless classics to contemporary bestsellers, from gripping mysteries to heartwarming romances, there's something for every reader within our walls.
      `,
    },
    {
      id: '3',
      name: 'Micky Mouse Book Store',
      image: bookImg3,
      description: `
      Welcome to the Micky Mouse Book Store, where every page holds a new adventure and every corner whispers tales waiting to be discovered. Nestled in the heart of our bustling city, The Book Haven is not just a store; it's a sanctuary for bibliophiles, a haven for the curious, and a refuge for the weary soul.

      Step through our doors and embark on a journey through time and space, guided by the scent of freshly printed pages and the soft rustle of turning leaves. Our shelves bow under the weight of knowledge, offering a treasure trove of literature spanning genres and eras. From timeless classics to contemporary bestsellers, from gripping mysteries to heartwarming romances, there's something for every reader within our walls.
      `,
    },
    {
      id: '4',
      name: 'Koktras Book Store',
      image: bookImg4,
      description: `
      Welcome to the Koktras Book Store, where every page holds a new adventure and every corner whispers tales waiting to be discovered. Nestled in the heart of our bustling city, The Book Haven is not just a store; it's a sanctuary for bibliophiles, a haven for the curious, and a refuge for the weary soul.

      Step through our doors and embark on a journey through time and space, guided by the scent of freshly printed pages and the soft rustle of turning leaves. Our shelves bow under the weight of knowledge, offering a treasure trove of literature spanning genres and eras. From timeless classics to contemporary bestsellers, from gripping mysteries to heartwarming romances, there's something for every reader within our walls.
      `,
    },
    {
      id: '5',
      name: 'Good Hell Book Store',
      image: bookImg5,
      description: `
      Welcome to the Good Hell Book Store, where every page holds a new adventure and every corner whispers tales waiting to be discovered. Nestled in the heart of our bustling city, The Book Haven is not just a store; it's a sanctuary for bibliophiles, a haven for the curious, and a refuge for the weary soul.

      Step through our doors and embark on a journey through time and space, guided by the scent of freshly printed pages and the soft rustle of turning leaves. Our shelves bow under the weight of knowledge, offering a treasure trove of literature spanning genres and eras. From timeless classics to contemporary bestsellers, from gripping mysteries to heartwarming romances, there's something for every reader within our walls.
      `,
    },
  ];

  useState(() => {
    setFilteredData(booksStoreList);
  }, []);

  const handleSearch = text => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredData(booksStoreList);
    } else {
      const filtered = booksStoreList.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const handleSelectStore = store => {
    navigation.navigate('Details', {store});
  };

  const renderRestaurantItem = ({item}) => (
    <TouchableOpacity onPress={() => handleSelectStore(item)}>
      <View style={styles.restaurantItem}>
        <Image source={item.image} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={[styles.headerText, styles.largerText]}>E</Text>
        <Text style={styles.headerText}>Field</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search any..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <View style={styles.mainContainer}>
        {filteredData.length > 0 ? (
          <FlatList
            data={filteredData}
            renderItem={renderRestaurantItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={{textAlign: 'center'}}>
            No books found!! Try another...
          </Text>
        )}
      </View>
    </>
  );
}

export default HomeScreen;
