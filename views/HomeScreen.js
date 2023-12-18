// screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Title, Paragraph } from "react-native-paper";
import { Text, Card, Button, Icon } from "@rneui/themed";

import axios from "axios";

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Cambia la URL según la dirección de tu servidor Express
    const apiUrl = "http://192.168.1.68:3000/api/productos";

    axios
      .get(apiUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del servidor: ", error);
      });
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <SearchBar placeholder="Buscar..." />
          <Text></Text>
          {users.map((user) => (
            <Card key={user.id}>
              <Card.Title>{user.nombre}</Card.Title>
              <Card.Divider />
              <Card.Image
  
                style={{ padding: 170, width:150, alignContent:"center"}}
                source={{
                  uri:"https://ibarramayoreo.com/images/IMAGENES/5895/01.jpg",
                }}
              />
              <Text style={{ marginBottom: 10, marginTop:10, textAlign:"center" }}>
                Precio:{user.precio}
              </Text>
              <Text style={{ marginBottom: 10, textAlign:"center" }}>
                Supermercado:{user.nombre_superm}
              </Text>
              <Text style={{ marginBottom: 10, textAlign:"center" }}>
                Categoria:{user.categoria}
              </Text>
              <Button
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="Ver detalle"
              />
            </Card>
          ))}
          {/* 
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
        </Card> */}

          <Text></Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
