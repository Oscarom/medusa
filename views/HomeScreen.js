// screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import axios from "axios";

const HomeScreen = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Cambia la URL según la dirección de tu servidor Express
    const apiUrl = 'http://192.168.1.68:3000/api/users';

    axios.get(apiUrl)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos del servidor: ', error);
      });
  }, []);

  return (
    <SafeAreaView>
      <View>
        <SearchBar placeholder="Buscar..." />
        <Text></Text>

        <Text>Datos de la base de datos MySQL:</Text>
        {users.map((user) => (
          <Text key={user.id}>Id:{user.id} Nombre:{user.nombre} Email:{user.email}</Text>
        ))}

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
