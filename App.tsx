import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/home';
import React, { useState } from "react";
import { TextInput, View, Dimensions, Image, Text, StyleSheet, FlatList } from "react-native";
const Stack = createStackNavigator();
const data: ItemData[] = [  {
    id: 0,
    title: 'Xiaomi Mi True Wireless Earbuds',
    imgURL:
      'https://m.media-amazon.com/images/I/51uguxa9nYL._AC._SR360,460.jpg',
    price: '₺134,77',
    inStock: true,
  },
  {
    id: 1,
    title: 'General Mobile GM 20',
    imgURL:
      'https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg',
    price: '₺1.810,21',
    inStock: true,
  },
  {
    id: 2,
    title: 'Philips 58PUS8505/62 The One',
    imgURL:
      'https://m.media-amazon.com/images/I/71zLCzJcXaL._AC._SR360,460.jpg',
    price: '₺6.992,25',
    inStock: false,
  },
  {
    id: 3,
    title: 'LG 49UM7100PLB Ultra HD 4K',
    imgURL:
      'https://m.media-amazon.com/images/I/71gAldY8eGL._AC._SR360,460.jpg',
    price: '₺4.614,38',
    inStock: true,
  },
  {
    id: 4,
    title: 'Samsung Galaxy M31 SM-M315F',
    imgURL:
      'https://m.media-amazon.com/images/I/71mUIp9oCXL._AC._SR360,460.jpg',
    price: '₺2.995,80',
    inStock: true,
  },
  {
    id: 5,
    title: 'Apple AirPods Series 2',
    imgURL:
      'https://m.media-amazon.com/images/I/51XanmiXw0L._AC._SR360,460.jpg',
    price: '₺1.299,00',
    inStock: true,
  },
  {
    id: 6,
    title: 'Lenovo Tab M10 Plus',
    imgURL:
      'https://m.media-amazon.com/images/I/81JR-A35D0L._AC._SR360,460.jpg',
    price: '₺2.496,50',
    inStock: false,
  },
  {
    id: 7,
    title: 'Xiaomi Redmi 20000 Mah',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/41vVdTukkgL._AC_SX522_.jpg',
    price: '₺134,70',
    inStock: false,
  },
  {
    id: 8,
    title: 'Xiaomi Mijia Smart Home 360',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31G-rIrW9zL._AC_UL320_SR226,320_.jpg',
    price: '₺269,73',
    inStock: true,
  },
  {
    id: 9,
    title: 'Xiaomi Mi Box S 4K Ultra HD',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/31sNKUGwNUL._AC_.jpg',
    price: '₺478,53',
    inStock: true,
  },
  {
    id: 10,
    title: 'Haylou Solar LS-5 Smartwatch',
    imgURL:
      'https://images-na.ssl-images-amazon.com/images/I/51kfZ4W9YSL._AC_SX522_.jpg',
    price: '₺296,00',
    inStock: true,
  },
];
interface ItemData {
  id: number;
  title: string;
  price: string;
  imgURL: string;
  inStock: boolean;
}
function App() {
  const [input, setInput] = useState<string>("");

  const handleOnChangeText = (text: string) => {
    setInput(text);
  };
  const Item: React.FC<{ item: ItemData; isLast: boolean }> = ({ item, isLast }) => (
    <View style={[styles.item, isLast ? styles.fullWidthItem : styles.halfWidthItem]}>
      <Image source={{ uri: item.imgURL }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      {!item.inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
    </View>
  );
  return (
    <View style={styles.view}>
      <TextInput
        placeholder="Ara..."
        onChangeText={handleOnChangeText}
        value={input}
        style={styles.textInput}
      />
      <FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Item 
            item={item} 
            isLast={index === data.length - 1 && data.length % 2 !== 0} 
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    paddingBottom:70
  },
  container: {
    padding: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  fullWidthItem: {
    width: '95%',
  },
  halfWidthItem: {
    width: '45%',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  outOfStock: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    margin: 10,
    backgroundColor: "#d7dbd8",
    width: Dimensions.get('window').width - 20,
    height: 50,
    borderRadius: 10,
    paddingLeft:14,
    fontSize:16
  },
});
export default App;
