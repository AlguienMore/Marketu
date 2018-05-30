import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, ScrollView } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Compra Exitosa!',
      'Pronto recibira su Producto!',
    );
  };

  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Card title="Papita rizada">
         
          <Image
            source={{ uri: 'http://www.carulla.com/images/products/998/0000023410022998/0000023411694530_lrg_a.jpg' }}
            style={{ height: 140, width: 200 }}
          />
          <Text style={styles.paragraph}> Precio: $1700 </Text>
          
          <Button
          color= '#ff9100'
            title="Comprar"
            onPress={this._handleButtonPress}
          />
        
        
        </Card>
        <Card title="M&M">
          <Image
            source={{ uri: 'https://www.acentofloral.com.mx/wp-content/uploads/2016/04/Dulces-2.png' }}
            style={{ height: 140, width: 200 }}
          />
          <Text style={styles.paragraph}> Precio: $1000 </Text>
          <Button 
            color= '#ff9100'
            title="Comprar"
            onPress={this._handleButtonPress}
          />
        
        </Card>
        <Card title="Brownie">
          <Image
            source={{ uri: 'http://arcdn.ar-cdn.com/recipes/originals/7753a030-b7d2-48a6-8950-a08187df4782.jpg' }}
            style={{ height: 140, width: 200 }}
          />
          <Text style={styles.paragraph}> Precio: $3000 </Text>
          <Button
          color= '#ff9100'
            title="Comprar"
            onPress={this._handleButtonPress}
          />
        </Card>
         <Card title="Galleta Oreo">
          <Image
            source={{ uri: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/207160-1000-1000/7622210643766-20-1.jpg?v=636287519880930000' }}
            style={{ height: 140, width: 200 }}
          />
          <Text style={styles.paragraph}> Precio: $600 </Text>
          <Button
          color= '#ff9100'
            title="Comprar"
            onPress={this._handleButtonPress}
          />
        </Card>
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  
  
  
});
