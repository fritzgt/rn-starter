import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  const [counter, setCounter] = useState(0);

  const navigate = () => {
    props.navigation.navigate('List');
  };
  return (
    <View>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button
        style={styles.spacing}
        onPress={() => setCounter(counter - 1)}
        title="Decrease counter"
      />
      <TouchableOpacity
        style={styles.spacing}
        onPress={() => setCounter(counter + 1)}
      >
        <Text>Increase counter</Text>
      </TouchableOpacity>
      <Button title="Go to List" onPress={() => navigate()} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    marginVertical: 50,
  },
  spacing: {
    marginVertical: 50,
  },
});

export default HomeScreen;
