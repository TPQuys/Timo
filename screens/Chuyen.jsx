import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({ route }) {
    const Navigation = useNavigation();
    var [trans, setTrans] = useState("");
    var [note,setNote] = useState("");
    var [account, setAccounts] = useState({});
    route = useRoute()
    var [id, sendAccount] = route.params
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/" + id)
            const responseJSON = await response.json();
            setAccounts(responseJSON);
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
                <TouchableOpacity onPress={() => Navigation.navigate("Home", sendAccount)}>
                    <Text style={{ color: "#563d81", fontSize: 16 }}>Hủy</Text>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 10, shadowOpacity: 0.3, shadowRadius: 5, borderRadius: 5, padding: 10, gap: 10 }}>
                <View style={{ flexDirection: "row", gap: 40 }}>
                    <Text>TỪ</Text>
                    <Text style={{ fontWeight: 600 }}>Tài khoản chính</Text>
                </View>
                <View style={{ borderColor: "#30cc9a", borderWidth: 2, width: "50%", borderRadius: 10, padding: 10, gap: 7 }}>
                    <Text style={{ fontWeight: 600 }}>Tài khoản chính</Text>
                    <Text style={{ color: "grey", fontWeight: 500 }}>{convert(sendAccount.balance)}</Text>
                </View>
                <View style={{ height: 1, borderWidth: 0.2, borderColor: "lightgrey" }} />
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Text>ĐẾN</Text>
                    <Image source={require("../pics/avatar.jpg")} style={{ height: 25, width: 25 }} />
                    <Text style={{ fontWeight: 600 }}>{account.name}</Text>
                </View>
                <View style={{ borderColor: "#30cc9a", borderWidth: 2, width: "50%", borderRadius: 10, padding: 10, gap: 7 }}>
                    <Text style={{ fontWeight: 600 }}>{account.bank}</Text>
                    <Text style={{ color: "grey", fontWeight: 500 }}>{account.name}</Text>
                    <Text style={{ color: "grey", fontWeight: 500 }}>{account.user}</Text>
                </View>
            </View>
            <TextInput
                onChangeText={setTrans} value={trans}
                style={styles.input} placeholder='Số tiền' />
            <Text style={{ color: "grey", fontWeight: 500, margin: 10 }}>Tối đa 100.000.000 VND</Text>
            <TextInput
                onChangeText={setNote} value={note}
                style={styles.input} placeholder='Lời nhắn (Nếu có)' />
            <TouchableOpacity
                onPress={() => {
                    if (trans != "" && trans*1<=sendAccount.balance) {
                        Navigation.navigate("Review",[sendAccount,account,trans,note])
                    }
                    else Navigation.navigate("InputError")
                }}
                style={styles.submit}><Text style={{ color: "#8a78a9", fontWeight: 700 }}>XEM LẠI</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    input: { margin: 10, shadowOpacity: 0.3, shadowRadius: 5, borderRadius: 5, paddingVertical: 22, gap: 10, padding: 8, fontSize: 15, fontWeight: 500, color: "grey" },
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

})