import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  const friends = [{ name: 'Fritz' }, { name: 'Sasha' }, { name: 'Kristen' }];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30,
    backgroundColor: 'red',
  },
});

export default ListScreen;
