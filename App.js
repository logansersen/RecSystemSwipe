import React from 'react';
import { Text, Image, ImageBackground, View, StyleSheet } from 'react-native'; //View is a container for styling

const App = () => {
  return (
    //<Text style = {{textAlign: 'center', marginTop: 50}}>Hello nibbas</Text>
    <View style={styles.pageContainer}>
      <View style = {styles.card}>
        <ImageBackground 
          source={{ 
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG'
          }} 
          style={styles.image}
        >
          <View style = {styles.cardInner}>
            <Text style = {styles.imageName}>Image Name</Text>
          </View>
        </ImageBackground>
      </View>
    </View>  
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    justifyContent: 'flex-end',
  },
  cardInner: {
    marginHorizontal: 20
  },
  imageName: {
    //paddingLeft: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10,
  }
})

export default App;

















/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

