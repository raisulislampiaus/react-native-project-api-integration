import React, {useState} from 'react'
import { View, Text, Image,StyleSheet, ScrollView, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button} from 'react-native-paper';
export default function SingleProduct({navigation, route}) {
    const plant = route.params;
    return (
        <ScrollView>
           <View style={styles.backIcon}  >
                <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} /> 
           </View>
           <View style={styles.imageContainer} >
                      <Image 
                            source={{
                                uri: plant.image ? plant.image 
                                : 'https://cdn.pixabay.com/photo/2016/09/23/11/37/cardboard-1689424_960_720.png'
                            }}
                            resizeMode="contain"
                            style={styles.image}
                        />
           </View>
                <View style={styles.nameb}>
                    <Text style={styles.name}>{plant.name}</Text>
                    <Text style={styles.brand}>{plant.brand}</Text>
                </View>
                <View style={styles.descriptionContain}>
                  <Text style={styles.description}>{plant.description}</Text>
                  <Text style={styles.richdescription}>{plant.richDescription}</Text>
                </View>
                <View  style={styles.conetent}>
                   <Text style={styles.price}> Price : ${plant.price}</Text>
                   <Button style={styles.btn}>Add Cart</Button>
                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        
        
    },
    imageContainer:{
        backgroundColor: "#000",
        height: 250,
        borderRadius: 10,
        margin: 10,
    },
    backIcon: {
        padding: 10,
        backgroundColor: "#fff",
    },
    nameb: {
        margin: 10,
        marginTop: 10,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-around",
        
    },
    name: {
        
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    brand: {
        
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    descriptionContain: {
        margin: 10,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description:{
        marginTop: 50,
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold'
    },
    richdescription: {
        marginTop: 50,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: 'orange',
        marginTop: 10,
        margin: 40,
        marginBottom: 20,
      },
      price: {
        color: 'red',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 8,
        
      },

      conetent:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }

});