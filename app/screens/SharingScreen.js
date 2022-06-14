import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TextInput, Button, Alert, TouchableHighlight, useState } from 'react-native'

function SharingScreen({ navigation }) {
  return (
    <ImageBackground resizeMode= "contain" style={styles.sharebg} source={require('../assets/share.png')}>
      <Text style={styles.caption}>Pengobatan yang sudah dilakukan</Text>
      <View style={styles.block}>
        <TouchableHighlight>
          <View style={styles.obatbut}>
            <Text>Habatasauda</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.obatbut}>
            <Text>Teh Hijau</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.obatbut}>
            <Text>Obat X</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Text style={styles.caption}>Ayo Ceritakan Pengalamanmu</Text>
      <TextInput
        style={styles.input}
        multiline = {true}
        textAlignVertical={"top"}
        placeholder="Tulis Disini"
      ></TextInput>
      <View style={styles.unggah}>
        <Button
          color="gray"
          title='Sharing Pengalamanmu'
          onPress={() =>
            Alert.alert(
              "Apakah anda yakin",
              "Cerita anda akan diupload dan dilihat banyak orang",
              [
                {text: "Cancel"},
                {text: "Ok", onPress:() => navigation.navigate('HomeScreen')},
              ])}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  sharebg: {
    paddingHorizontal: 20,
    paddingVertical: 140,
    flexDirection: "column",
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  caption: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    height: 300,
    fontSize: 12,
    padding: 8,
    overflow: "scroll"
  },
  unggah: {
    height: 50,
    top: 8,
  },
  obatbut: {
    height: 40,
    width: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SharingScreen;