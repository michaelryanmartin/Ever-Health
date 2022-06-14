import React from 'react'
import { ImageBackground, StyleSheet, TouchableHighlight, Image, View, Text } from 'react-native'

function ProfilScreen({ navigation }) {
  return (
    <ImageBackground
      resizeMode= 'contain'
      style={styles.background}
      source={require('../assets/profil.png')}
    >
      <View style={styles.botnav}>
                <TouchableHighlight onPress={() => navigation.navigate('HomeScreen')}>
                  <View style={styles.botnavbutton}>
                      <Image
                          style={styles.botnavpic}
                          source={require('../assets/beranda.png')}
                      ></Image>
                      <Text style={{fontSize:8, fontWeight:"bold"}}>Beranda</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('PenyakitScreen')}>
                    <View style={styles.botnavbutton}>
                        <Image
                            style={styles.botnavpic}
                            source={require('../assets/sakit.png')}
                        ></Image>
                        <Text style={{fontSize:8, fontWeight:"bold"}}>Penyakit</Text>
                        </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('ObatScreen')}>
                    <View style={styles.botnavbutton}>
                        <Image
                            style={styles.botnavpic}
                            source={require('../assets/med.png')}
                        ></Image>
                        <Text style={{fontSize:8, fontWeight:"bold"}}>Obat</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('ProfilScreen')}>
                    <View style={styles.pressedbotnavbutton}>
                        <Image
                            style={styles.botnavpic}
                            source={require('../assets/orang.png')}
                        ></Image>
                        <Text style={{fontSize:8, fontWeight:"bold"}}>Profil</Text>
                    </View>
                </TouchableHighlight>
            </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
  },
  botnav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    borderWidth: 2,
    borderColor: "#bebebe",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  botnavbutton: {
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "column",
  },
  pressedbotnavbutton: {
    width: 50,
    height: 50,
    backgroundColor: "#dadada",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "column",
  },
  botnavpic: {
    width: 35,
    height: 35,
  },
});

export default ProfilScreen;