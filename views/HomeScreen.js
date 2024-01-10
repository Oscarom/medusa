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

  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);

  const filteredUsers = users.filter(user =>
    user.nombre.toLowerCase().includes(searchText.toLowerCase())
    || user.nombre_superm.toLowerCase().includes(searchText.toLowerCase())
    || user.categoria.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddToCart = (productId) => {
    // Implementar la lógica para agregar el producto al carrito o a la lista
    console.log('Agregar producto con ID:', productId);
    alert("Producto agregado con exito")
  };

  useEffect(() => {
    // Cambia la URL según la dirección de tu servidor Express
    const apiUrl = "http://192.168.1.69:3000/api/productos";

    axios
      .get(apiUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del server: ", error);
      });
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <SearchBar placeholder="Buscar..." 
           onChangeText={(text) => setSearchText(text)}
           value={searchText}
           />

          <Text></Text>
          {filteredUsers.map((user) => (
            <Card key={user.id}>
              <Card.Title>{user.nombre}</Card.Title>
              <Card.Divider />
              <Card.Image
  
                style={{ padding: 170, width:150, alignContent:"center"}}
                source={{
                  uri: user.image
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
                title="Agregar a la lista"
                onPress={() => handleAddToCart(user.id)}
              />
            </Card>
          ))}
          {/* 
        <Card>
          <Card.Cover
            source={{
              uri: "https://thumbs.dreamstime.com/b/apple-rojo-aislado-con-el-camino-de-recortes-19130134.jpg",
            }}
          />
          <Card.Content>
            <Text></Text>
            <Button mode="outlined" onPress={() => console.log("Pressed")}>
              Visita las ofertas
            </Button>
          </Card.Content>

           source={{
                  uri: "https://thumbs.dreamstime.com/b/apple-rojo-aislado-con-el-camino-de-recortes-19130134.jpg",
                }}
        </Card> */}

          <Text></Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
