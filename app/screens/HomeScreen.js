import React from 'react'
import { ImageBackground, StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.backgroundhome}
            source={require('../assets/menu.png')}
        >
            <View 
                style={{
                    flex: 1,
                    paddingVertical: 100,
                    paddingHorizontal: 30,
                    justifyContent: "space-evenly"
                }} >
                    <Text style={styles.title}>Riwayat Penyakit</Text>
                    
                    <View style={{ flexDirection: "row"}} >
                        <View style={{ flexDirection: "column", alignItems: "center"}}>
                            <TouchableHighlight onPress={() => navigation.navigate('PenyakitScreen')}>
                                <Image 
                                    style={styles.image}
                                    source={require('../assets/vertigo.jpg')}
                                ></Image>
                            </TouchableHighlight>
                            <Text style={styles.caption}>Vertigo</Text>
                        </View>
                        
                        <Text>        </Text>
                        <View style={{ flexDirection: "column", alignItems: "center"}}>
                            <Image 
                                style={styles.image}
                                source={require('../assets/mulas.jpg')}
                            ></Image>
                            <Text style={styles.caption}>Mulas</Text>
                        </View>
                    </View>

                    <Text style={styles.title}>Daftar Cerita</Text>

                    <View style={{ flexDirection: "row", marginRight: 120}}>
                        <TouchableHighlight onPress={() => navigation.navigate('PenyakitScreen')}>
                            <Image 
                                style={styles.image}
                                source={require('../assets/vertigo.jpg')}
                            ></Image>
                        </TouchableHighlight>

                        <Text>    </Text>

                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.caption}>Vertigo</Text>
                            <Text style={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginRight: 120}}>
                        <Image
                            style={styles.image}
                            source={require('../assets/mulas.jpg')}
                        ></Image>

                        <Text>    </Text>

                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.caption}>Mulas</Text>
                            <Text style={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.title}>Riwayat Penggunaan Obat</Text>

                    <View style={{ flexDirection: "row"}}>
                        <TouchableHighlight onPress={() => navigation.navigate('ObatScreen')}>
                            <Image 
                                style={styles.obat}
                                source={require('../assets/obat1.png')}
                                resizeMode= "contain"
                            ></Image>
                        </TouchableHighlight>
                        
                        <Text>   </Text>
                        <Image 
                            style={styles.obat}
                            source={require('../assets/obat2.png')}
                            resizeMode= "contain"
                        ></Image>
                    </View>
            </View>
            
            <View style={styles.botnav}>
                <TouchableHighlight onPress={() => navigation.navigate('HomeScreen')}>
                  <View style={styles.pressedbotnavbutton}>
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
                    <View style={styles.botnavbutton}>
                        <Image
                            style={styles.botnavpic}
                            source={require('../assets/orang.png')}
                        ></Image>
                        <Text style={{fontSize:8, fontWeight:"bold"}}>Profil</Text>
                    </View>
                </TouchableHighlight>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundhome: {
        flex: 1,
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 16,
        fontWeight: "bold",
    },
    description: {
        fontSize : 14,
        fontWeight: "normal",
    },
    obat: {
        height: 60,
        width: 140,
        borderRadius: 20,
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

export default HomeScreen;