import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
export default function App({ route }) {
    route = useRoute();
    const Navigation = useNavigation();
    const account = route.params
    const [transations, setTransactions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/"+account.id+"/history")
            const responseJSON = await response.json();
            setTransactions(responseJSON);
        }
        fetchData();
    }, [])
    function convert(balance) {
        return new Intl.NumberFormat({ style: 'currency', currency: 'EUR' }).format(
            balance,
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 15 }}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <Image source={require("../pics/back.jpg")} style={{ height: 35, width: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>Chuyển tiền</Text>
                <View />
            </View>
            <ScrollView style={styles.body}>
                <View style={[styles.center, { margin: 15 }]}>
                    <Text>Số dư khả dụng:</Text>
                    <Text style={{ color: "#553d82", fontSize: 24, fontWeight: 600 }}>{convert(account.balance)}</Text>
                </View>
                <View style={[styles.center, { flexDirection: "row", gap: 25 }]}>
                    <View style={styles.center}>
                        <Text>Tổng số dư:</Text>
                        <Text style={{ fontSize: 22, fontWeight: 600 }}>{convert(account.balance)}</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: "lightgrey", width: 1, height: "80%" }} />
                    <View style={styles.center}>
                        <Text>Đang chờ</Text>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: "#226496" }}>0</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.center, { margin: 15, flexDirection: 'row', backgroundColor: "#226496", justifyContent: "space-between", borderRadius: 12, padding: 15 }]}>
                    <Text style={{ fontWeight: 600, color: "white", fontSize: 17 }}>Báo cáo phân tích chi tiêu</Text>
                    <Image source={require("../pics/chart.jpg")} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <View style={{backgroundColor:"lightgray"}}>
                <Text style={{ color: "gray", marginHorizontal: 15 }}>LỊCH SỬ GIAO DỊCH</Text>
                </View>
                <FlatList
                    data={transations.reverse()}
                    renderItem={({ item }) => (
                        <View style={{ borderBottomWidth: 2, borderColor: "lightgrey", marginHorizontal: 15}}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ fontSize: 18, fontWeight: 600,flex:1 }}>Đến {item.name}</Text>
                                <Text style={{ fontSize: 18, fontWeight: 600 }}>-{convert(item.money)}</Text>
                            </View>
                            <Text>{item.user}</Text>
                            <Text>Lời nhắn: {item.note}</Text>
                            <View style={{flexDirection:"row"}}>
                            <View style={{flex:1}}/>
                            <Text>{item.time}</Text>
                            </View>
                            
                        </View>
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
})