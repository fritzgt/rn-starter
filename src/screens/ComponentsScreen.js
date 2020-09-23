import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  return (
    <View>
      <Text styles={styles.textStyle}>Hello from ComponentsScreen</Text>
      <Text>Fritz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 100,
    color: 'red',
  },
});

export default ComponentsScreen;
