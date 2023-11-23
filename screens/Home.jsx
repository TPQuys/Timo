import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { tabs } from '../js/tabs';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function App({ route }) {
    const slide = [
        {id:1,image:require("../pics/background.jpg")},
        {id:2,image:require("../pics/background1.jpg")},
        {id:3,image:require("../pics/background2.jpg")},
        {id:4,image:require("../pics/background3.jpg")}
    ];

    route = useRoute()
    var account = route.params
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
            <Slide >
                    {slide.map((item) => (
                        <View key={item.id} style={{alignItems:"center",justifyContent:"center",gap:3}}>
                        <Image source={{ uri: item.image }}  style={{ width: "100%", height: 170, zIndex: -1 }} />
                        </View>
                    ))}
            </Slide>
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
                        <TouchableOpacity 
                        onPress={()=>Navigation.navigate("History",account)}
                        style={styles.circle}>
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
                    <Text>Tìm hiểu thêm</Text>
                </TouchableOpacity></Text>
           {tabs(account,"Home")}
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