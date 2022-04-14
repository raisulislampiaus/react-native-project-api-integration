import React, {useState, useEffect} from 'react'
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper/src'

var { width } = Dimensions.get("window");

const Banner = () => {
    const [ bannerData, setBannerData ] = useState([]);

    useEffect( () => {
        setBannerData([ "https://cdn.pixabay.com/photo/2020/07/15/18/26/footwear-5408643_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/03/23/12/26/football-1274661_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/04/03/10/07/converse-309846_960_720.png"]
        )
        return () => {
            setBannerData([])
        }
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper 
                style={{ height: width / 2 }}
                showButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                >
                {bannerData.map((item) =>{
                    return(
                        <Image 
                        key={item}
                        style={styles.imageBanner}
                        resizeMode="contain"
                        source={{uri: item }}
                        />
                    );
                })}
                </Swiper>
                <View style={{ height: 20}}></View>
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner