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
    function countFavorites() {
        let count = 0;
        for (const item of account.fav) {
            if (item.favorite) {
                count++;
            }
        }
        return count;
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", backgroundColor: "white", padding: 10, }}>
                <Image source={require("../pics/avatar.jpg")} style={{ height: 50, width: 50, margin: 5 }} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: 600, margin: 5 }}>{account.name}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", gap: 15 }}>
                    <Ionicons name='qr-code' color={"#553d82"} size={25} />
                    <Ionicons name='chatbox' color={"#553d82"} size={25} />
                    <Ionicons name='notifications' color={"#553d82"} size={25} />
                </View>
            </View>
            <ScrollView style={styles.body}>
                <View style={[styles.center, { flexDirection: "row", backgroundColor: "#f6f6f6" }]}>
                    <View style={[styles.center, { margin: 10 }]}>
                        <Text style={[styles.number, { color: "#563d81" }]}>{account.fav.length}</Text>
                        <Text>Người nhận</Text>
                    </View>
                    <View style={{ borderWidth: 1, width: 1, height: 40, margin: 20, borderColor: "lightgrey" }} />
                    <View style={[styles.center, { margin: 10 }]}>
                        <Text style={[styles.number, { color: "#fe9424" }]}>{countFavorites()}</Text>
                        <Text>Yêu thích</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", backgroundColor: "#563d81", padding: 10, margin: 10, borderRadius: 10 }}>
                    <Image source={require("../pics/coin.jpg")} style={{ height: 40, width: 40 }} />
                    <Text style={{ margin: "auto", fontSize: 16, fontWeight: 600, color: "white" }}>Đường dẫn chuyển tiền</Text>
                    <Image source={require("../pics/arrow.jpg")} style={{ height: 40, width: 40 }} />
                </View>
                <Text style={{ margin: "auto", color: "lightgrey" }}>Thêm người nhận</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 15 }}>
                    <TouchableOpacity style={styles.box}>
                        <Image source={require("../pics/timo.jpg")} style={{ height: 30, width: 50 }} />
                        <Text>Timo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <Image source={require("../pics/bank.jpg")} style={{ height: 30, width: 50 }} />
                        <Text>Tài khoản</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <Image source={require("../pics/card.jpg")} style={{ height: 30, width: 50 }} />
                        <Text>Số thẻ</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 15, marginVertical: 20, gap: 5, backgroundColor: "#f6f6f6" }}>
                    <Text style={{ fontWeight: 700 }}>Danh sách người nhận</Text>
                    <Text>Chọn từng người nhận để quản lý</Text>
                </View>
                <View style={{ padding: 15, flexDirection: "row" }}>
                    <Image source={require("../pics/pin.jpg")} style={{ height: 30, width: 30 }} />
                    <Text style={{ marginVertical: "auto", marginHorizontal: 5, fontSize: 16 }}>Yêu thích</Text>
                    <View style={{ borderColor: "lightgrey", flex: 1, borderWidth: 1, height: 1, marginVertical: "auto" }} />
                </View>
                <FlatList
                    data={account.fav}
                    renderItem={({ item }) => (
                        <View style={{ flexDirection: "row", margin: 15, gap: 10 }}>
                            <Image source={require("../pics/avatar.jpg")} style={{ height: 45, width: 45 }} />
                            <View style={{ gap: 10 }}>
                                <Text style={{ fontWeight: 700 }}>{item.name}</Text>
                                <Text>Thanh toán lần cuối: {item.last}</Text>
                            </View>
                        </View>
                    )}
                />
            </ScrollView>
            <View style={{ flexDirection: "row",justifyContent:"space-between", padding:20,bottom:1,width:"100%",borderTopLeftRadius:20,borderTopRightRadius:20,position:"absolute",backgroundColor:"white",height:70 }}>
                <TouchableOpacity onPress={()=>Navigation.navigate("Home",account)}><Ionicons style={{margin:"auto"}} name="home" color={"lightgrey"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Trang chủ</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>Navigation.navigate("KhamPha")}><Ionicons  style={{margin:"auto"}} name="bar-chart" color={"lightgray"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Khám phá</Text></TouchableOpacity>
                <View><TouchableOpacity onPress={()=>Navigation.navigate("KhamPha")} style={{top:-40,height:50,width:50,backgroundColor:"#563d81",margin:"auto",borderRadius:"50%"}}><Ionicons style={{margin:"auto"}} name='swap-horizontal' color={"lightgray"} size={30} /></TouchableOpacity>
                <Text style={{margin:"auto", fontSize:12,top:-16}}>Chuyển tiền</Text></View>
                <TouchableOpacity onPress={()=>Navigation.navigate("NguoiNhan")}><Ionicons style={{margin:"auto"}} name="people" color={"#fe9424"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Người nhận</Text></TouchableOpacity>
                <View ><Ionicons style={{margin:"auto"}} name="list" color={"lightgray"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Khác</Text></View>
            </View>
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