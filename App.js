import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import HomeScreen from './src/pages/HomeScreen';
import DetailsScreen from './src/pages/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide default header
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Custom Header Title', // Set custom header title
            headerShown: false, // Show header for this screen
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details', // Set custom header title
            headerShown: false, // Show header for this screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
