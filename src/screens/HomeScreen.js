import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  const navigate = () => {
    navigation.navigate('List');
  };
  return (
    <View>
      <View style={styles.container}>
        <Button title="+" onPress={() => setCounter(counter + 1)} />
        <Text style={styles.text}>Counter: {counter}</Text>
        <Button
          onPress={() => (counter <= 0 ? '' : setCounter(counter - 1))}
          title="-"
        />
      </View>

      <Button title="Go to List" onPress={() => navigate()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginVertical: 50,
  },
  spacing: {
    marginVertical: 50,
  },
});

export default HomeScreen;
