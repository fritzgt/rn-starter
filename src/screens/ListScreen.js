import React from 'react';
import { Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [{ name: 'Fritz' }, { name: 'Sasha' }, { name: 'Kristen' }];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    />
  );
};

export default ListScreen;
