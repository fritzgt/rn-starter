import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const ListScreen = () => {
  //Create an array of names to display

  const friends = [
    { name: 'Fritz' },
    { name: 'Sasha' },
    { name: 'Kristen' },
    { name: 'Anna' },
    { name: 'Wek' },
    { name: 'Jelek' },
  ];

  //Return the items/content
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
