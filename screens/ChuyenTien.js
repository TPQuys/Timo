import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({route}) {
    route = useRoute();
    const Navigation = useNavigation();
    const account = route.params
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", backgroundColor: "white", padding: 10, }}>
                <TouchableOpacity onPress={()=>Navigation.goBack()}> <Ionicons name='backspace'></Ionicons> </TouchableOpacity>
            </View>
            <ScrollView style={styles.body}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                    <TouchableOpacity
                    onPress={()=>{
                        Navigation.push("Account",account)
                    }} style={styles.box}>
                        <Image source={require("../pics/people.jpg")} style={{ height: 30, width: 50 }} />
                        <Text>Mới</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.box}>
                        <Image source={require("../pics/new.jpg")} style={{ height: 30, width: 50 }} />
                        <Text>Tài khoản</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <Image source={require("../pics/qr.jpg")} style={{ height: 30, width: 50 }} />
                        <Text>Số thẻ</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={{ padding: 15, flexDirection: "row" }}>
                    <Image source={require("../pics/pin.jpg")} style={{ height: 30, width: 30 }} />
                    <Text style={{ marginVertical: "auto", marginHorizontal: 5, fontSize: 16 }}>Yêu thích</Text>
                    <View style={{ borderColor: "lightgrey", flex: 1, borderWidth: 1, height: 1, marginVertical: "auto" }} />
                </View>
                <FlatList
                    data={account.fav}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        onPress={()=>{Navigation.push("Chuyen",[item.id,account]) 
                        console.log(item.id)}}
                        
                         style={{ flexDirection: "row", margin: 15, gap: 10 }}>
                            <Image source={require("../pics/avatar.jpg")} style={{ height: 45, width: 45 }} />
                            <View style={{ gap: 10 }}>
                                <Text style={{ fontWeight: 700 }}>{item.name}</Text>
                                <Text>{item.bank}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body: {
        paddingBottom: 100
    },
    center: { justifyContent: "center", alignItems: "center" },
    number: {
        fontSize: 30,
        fontWeight: 700
    },
    box: { width: 88, height: 70, shadowOpacity: 0.4, shadowRadius: 8, borderRadius: 10, justifyContent: "center", alignItems: "center" },
})