import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({ route }) {
    route = useRoute()
    const account = route.params
    function convert(balance) {
        return new Intl.NumberFormat({ style: 'currency', currency: 'EUR' }).format(
            balance,
        )
    }
    const Navigation = useNavigation();
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
            <Image source={require("../pics/background.jpg")} style={{ width: "100%", height: 170, zIndex: -1 }}></Image>
            <View style={styles.view1}>
                <View style={styles.account}>
                    <View>
                        <Text style={styles.accountlabel}>
                            Tài khoản Chính
                        </Text>
                        <TouchableOpacity><Text style={styles.number}>{account.user}</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.balence}>{convert(account.balance)} vnd</Text>
                </View>
                <View style={styles.accountTool}>
                    <View style={styles.toolLabel}>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons style={styles.icon} name='arrow-up'></Ionicons>
                        </TouchableOpacity>
                        <Text>Nạp tiền</Text>
                    </View>
                    <View style={styles.toolLabel}>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons style={styles.icon} name='timer-outline'></Ionicons>
                        </TouchableOpacity>
                        <Text>Lịch sử</Text> <Text> giao dịch</Text>
                    </View>
                    <View style={styles.toolLabel}>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons style={styles.icon} name='stats-chart'></Ionicons>
                        </TouchableOpacity>
                        <Text>Báo cáo</Text>
                        <Text>thu chi</Text>
                    </View>
                    <View style={styles.toolLabel}>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons style={styles.icon} name='card-outline'></Ionicons>
                        </TouchableOpacity>
                        <Text>Quản lí</Text>
                        <Text>Thẻ</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.hanMuc}>Hạn mức chuyển khoản mỗi tháng 100.000.000 </Text>
            <Text style={styles.hanMuc}>
                dồng. <TouchableOpacity style={styles.number}>
                    Tìm hiểu thêm
                </TouchableOpacity></Text>
            <View style={{ flexDirection: "row",justifyContent:"space-between", padding:20,bottom:1,width:"100%",borderTopLeftRadius:20,borderTopRightRadius:20,position:"absolute",backgroundColor:"white",height:70 }}>
                <TouchableOpacity onPress={()=>Navigation.navigate("Home",account)}><Ionicons style={{margin:"auto"}} name="home" color={"#563d81"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Trang chủ</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>Navigation.navigate("KhamPha",account)}><Ionicons  style={{margin:"auto"}} name="bar-chart" color={"lightgray"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Khám phá</Text></TouchableOpacity>
                <View><TouchableOpacity onPress={()=>Navigation.navigate("ChuyenTien",account)} style={{top:-40,height:50,width:50,backgroundColor:"#563d81",margin:"auto",borderRadius:"50%"}}><Ionicons style={{margin:"auto"}} name='swap-horizontal' color={"lightgray"} size={30} /></TouchableOpacity>
                <Text style={{margin:"auto", fontSize:12,top:-16}}>Chuyển tiền</Text></View>
                <TouchableOpacity onPress={()=>Navigation.navigate("NguoiNhan",account)}><Ionicons style={{margin:"auto"}} name="people" color={"lightgray"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Người nhận</Text></TouchableOpacity>
                <View ><Ionicons style={{margin:"auto"}} name="list" color={"lightgray"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Khác</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view1: {
        top: -30,
        height: 180,
        width: "90%",
        borderRadius: 10,
        padding: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        marginHorizontal: "auto",
        zIndex: 10,
        backgroundColor: "white"
    },
    account: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    accountlabel: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 7
    },
    number: {
        fontWeight: 500,
        textDecorationLine: 'underline',
        color: "#55c2a1"
    },
    balence: {
        color: "#563d81",
        fontSize: 22,
        fontWeight: 500
    },
    accountTool: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    circle: {
        borderRadius: "50%",
        height: 50,
        width: 50,
        backgroundColor: "#eeebf2",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        color: "#563d81",
        fontSize: 23,
    },
    toolLabel: {
        alignItems: "center"
    },
    hanMuc: {
        marginHorizontal: "auto",
    },
    container: {
        flex: 1,
        backgroundColor: "f5f5f5",
    }
})