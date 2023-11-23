import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({ route }) {
    const Navigation = useNavigation();
    route = useRoute();
    const [sendAccount,account,trans,note] = route.params
    async function guiTien(send) {
        const response = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/" + sendAccount.id, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                { balance: send }
            )
        })
    }
    async function nhanTien(take) {
        const response = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/" + account.id, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                { balance: take }
            )
        })
    }
    async function saveTran(note) {
        const response = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/" + sendAccount.id +"/history" ,{
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                {
                    time: Date.now,
                    user: account.user,
                    money:trans*1,
                    note,
                    name:account.name,
                }
            )
        })
    }
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
                <TouchableOpacity onPress={() => Navigation.navigate("Home", send)}>
                    <Text style={{ color: "#563d81", fontSize: 16 }}>Hủy</Text>
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "#563d81", alignItems: "center", padding: 15 }}>
                <Text style={{ fontSize: 17, color: "white" }}>Số dư khả dụng: <Text style={{ fontWeight: 600, fontSize: 20 }}>{convert(sendAccount.balance)}</Text></Text>
            </View>
            <View style={{ margin: 15, shadowOpacity: 0.3, shadowRadius: 5, borderRadius: 5, overflow:"hidden" }}>
                <View style={{ backgroundColor: "#e2e2e2", alignItems: "center", justifyContent: "center", padding: 15 }}>
                    <Text style={{ fontSize: 20, color: "#563d81" }}>Số tiền</Text>
                    <Text style={{ fontSize: 23, fontWeight: 500 }}>{convert(trans)}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>Tới</Text>
                    <Text style={styles.text2}>{account.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>SỐ TÀI KHOẢN</Text>
                    <Text style={styles.text2}>{account.user}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>TÊN NGÂN HÀNG</Text>
                    <Text style={styles.text2}>{account.bank}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text1}>Lời nhắn</Text>
                    <Text style={styles.text2}>{note}</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => {
                    let send = sendAccount.balance - trans * 1
                        let take = trans * 1 + account.balance
                        guiTien(send); nhanTien(take);saveTran(note)
                        sendAccount.balance = send
                        Navigation.push("Home", sendAccount)
                }}
                style={styles.submit}><Text style={{ color: "white", fontWeight: 700 }}>XÁC NHẬN</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    submit: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        backgroundColor: "#563d81",
        padding: 20,
        borderRadius: 10,
        bottom: 1,
        left: 1,
        right: 1,
        position: "absolute"
    },
    row: { borderWidth: 0.01, borderColor: "lightgrey", justifyContent: "center", alignItems: "center", gap: 5, padding: 10 },
    text1: { fontSize: 17, color: "#563d81" },
    text2: { fontSize: 17, fontWeight: 500 },
})