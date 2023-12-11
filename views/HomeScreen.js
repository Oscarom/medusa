// screens/HomeScreen.js
import React from 'react';
import { View, Image, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
  const carouselData = [
    { image: 'https://res.cloudinary.com/admitad-gmbh/image/upload/v1675458545/elz9dwgtehthyzfjloub.png' },
    { image: 'https://i.blogs.es/2e602b/650_1000_chedraui/450_1000.jpg' },
    { image: 'https://www.organizacionsoriana.com/images/sori_mercado.png' },
  ];

  return (
    <View>
      <SearchBar placeholder="Buscar..."/>
      <Text></Text>
      <Carousel
        data={carouselData}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={{ width: 300, height: 200 }} />
        )}
        sliderWidth={350}
        itemWidth={300}
      />

     
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <Image source={{ uri: 'https://example.com/reference1.jpg' }} style={{ width: 100, height: 100 }} />
        <Image source={{ uri: 'https://example.com/reference2.jpg' }} style={{ width: 100, height: 100 }} />
        <Image source={{ uri: 'https://example.com/reference3.jpg' }} style={{ width: 100, height: 100 }} />
      </View>
    </View>
  );
};

export default HomeScreen;
