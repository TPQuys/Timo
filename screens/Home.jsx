import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function App(Navigation) {
    Navigation = useNavigation;
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            <View style={styles.view1}>
                <View style={styles.account}>
                    <View>
                        <Text style={styles.accountlabel}>
                            Tài khoản Chính
                        </Text>
                        <TouchableOpacity><Text style={styles.number}>0949194600</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.balence}>10000000 vnd</Text>
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
                        <Text style={styles.textTool}>Lịch sử giao dịch</Text>
                    </View>
                    <View style={styles.toolLabel}>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons style={styles.icon} name='stats-chart'></Ionicons>
                        </TouchableOpacity>
                        <Text>Nạp tiền</Text>
                    </View>
                    <View style={styles.toolLabel}>
                        <TouchableOpacity style={styles.circle}>
                            <Ionicons style={styles.icon} name='card-outline'></Ionicons>
                        </TouchableOpacity>
                        <Text>Nạp tiền</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.hanMuc}>Hạn mức chuyển khoản mỗi tháng 100.000.000 </Text>
            <Text style={styles.hanMuc}>
            dồng. <TouchableOpacity style={styles.number}>
                Tìm hiểu thêm
            </TouchableOpacity></Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    view1: {
        marginTop: 150,
        height: 180,
        width: "90%",
        borderRadius: 10,
        borderWidth: 1,
        padding: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity:0.2,
        shadowRadius: 6,
        marginHorizontal:"auto",
        marginBottom:10
  
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
    textTool: {
        color: "grey",
        width: 60,
        alignItems: "center"
    },
    toolLabel: {
        alignItems: "center"
    },
    hanMuc:{
marginHorizontal:"auto",
    },


    container: {
        flex: 1,
        backgroundColor: "f5f5f5",
    }
})