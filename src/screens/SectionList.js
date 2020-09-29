import React from 'react';
import {
  View,
  SectionList,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const Item = ({ title }) => (
  <View style={styles.container}>
    <Image
      style={styles.images}
      source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
      }}
    />
    <Text style={styles.list}>{title}</Text>
  </View>
);

const data = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Section = () => (
  <SafeAreaView>
    <SectionList
      sections={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
  },
  list: {
    color: 'red',
    margin: 15,
    fontSize: 20,
  },
  container: {
    margin: 10,
    flexDirection: 'row',
  },
  images: {
    width: 50,
    height: 50,
  },
});

export default Section;
