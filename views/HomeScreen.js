// screens/HomeScreen.js
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { Button, Card, Title, Paragraph } from "react-native-paper";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <SearchBar placeholder="Buscar..." />
        <Text></Text>

        <Card>
          <Card.Cover
            source={{
              uri: "https://thelogisticsworld.com/wp-content/uploads/2023/04/walmart-mexico-2.jpg",
            }}
          />
          <Card.Content>
            <Text></Text>
            <Button mode="outlined" onPress={() => console.log("Pressed")}>
              Visita las ofertas
            </Button>
          </Card.Content>
        </Card>

        <Card>
          <Card.Cover
            source={{
              uri: "https://tb-static.uber.com/prod/image-proc/processed_images/43d534a7507b688c7f39e9700eb55d48/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
            }}
          />
          <Card.Content>
            <Text></Text>
            <Button mode="outlined" onPress={() => console.log("Pressed")}>
              Visita las ofertas
            </Button>
          </Card.Content>
        </Card>

        <Card>
          <Card.Cover
            source={{
              uri: "https://thelogisticsworld.com/wp-content/uploads/2023/04/walmart-mexico-2.jpg",
            }}
          />
          <Card.Content>
            <Text></Text>
            <Button mode="outlined" onPress={() => console.log("Pressed")}>
              Visita las ofertas
            </Button>
          </Card.Content>
        </Card>

        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
