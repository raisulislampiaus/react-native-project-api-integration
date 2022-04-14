import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import data from '../../assets/data/products.js';
import {Searchbar} from 'react-native-paper';
const width = Dimensions.get('screen').width / 2 - 8;
import {Button} from 'react-native-paper';
import Banner from '../screen/Banner.js';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';

export default function Home({navigation}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get(`${baseURL}products`);
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);

  const Card = ({plant}) => {
    const {name, image, price, countInStock} = plant;
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Product Detail', plant)} >
        <View style={styles.card}>
          <Image
            source={{uri: image}}
            style={{flex: 1, resizeMode: 'contain', top: -40}}
          />
          <Text style={styles.name}>{name}</Text>
          <Button style={styles.btn}>Add Cart</Button>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <Searchbar placeholder="Search" style={styles.Search} />
      <View>
        <Banner />
      </View>
          <FlatList
                    data={products}
                    renderItem={({item}) => <Card plant = {item}  />}
                    // keyExtractor={item => item._id }
                    keyExtractor={(item, index) => String(index)}
                    numColumns={2}
                />
      
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: 'black',
    width,
    marginHorizontal: 4,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    margin: 10,
  },
  btn: {
    backgroundColor: 'orange',
    marginTop: 10,
  },
  name: {
    color: 'white',
    fontSize: 12,
  },
  Search: {
    borderRadius: 10,
    margin: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'clo',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
});
