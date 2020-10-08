import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  const navigate = () => {
    navigation.navigate('List');
  };
  return (
    <View>
      <Text>Navigation Screen</Text>
      <Button
        title="Go to Components"
        onPress={() => navigation.navigate('Components')}
      />
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
      <Button
        title="Go to Section"
        onPress={() => navigation.navigate('Section')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color"
        onPress={() => navigation.navigate('Color')}
      />
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
  button: {
    fontSize: 150,
  },
});

export default HomeScreen;
