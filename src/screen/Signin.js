import React from 'react'
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import { TextInput, Button } from 'react-native-paper';
import image1 from '../../Images/login.png'

export default function Signin() {
    const [text, setText] = React.useState('');
    return (
        <View style={styles.container}>
           <View  style={styles.all}>
                <View >
                      <Image source={image1} style={styles.imageContainer} />  
                </View>
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    
                    placeholder="Email"
                    
                />  
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    
                    placeholder="Password"
                    
                /> 
                <View style={styles.btn}>
                        <Button>
                            Signin
                        </Button>
                </View>
                <View style={styles.btn}>
                        <Button>
                            Signup
                        </Button>
                </View>
               
           </View>
      </View>
    );
    
};
const styles = StyleSheet.create({
   
    container:{
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff'
       
    },
    btn:{
       marginTop: 10,
       margin: 10,
       backgroundColor: "orange",
       
    },
    input:{
        margin: 10,
        
    },
    imageContainer:{
        height: 200,
        width: 200,
        marginLeft: 70,
        borderRadius: 15,
    },
    all:{
        margin: 20,
    }
    
});
