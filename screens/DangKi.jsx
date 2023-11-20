import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

export default function App({route}) {
    const Navigation = useNavigation();
    route = useRoute();
    var [user, setUser] = useState("");
    var [password, setPassword] = useState("");
    var [name, setName] = useState("");
    const accounts = route.params
    async function post(user,password,name) {
        const res = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                {
                    name,user,password,"balance":0
                }
            )
        })
            .then(res => res.json())
    }
    return (
        <LinearGradient
            colors={['#d3c7e3', '#a47dd5', "#44336a", "#211b2b"]}
            style={styles.container}
        >
            <View style={styles.header}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={require("../pics/logo.png")} style={{ height: 30, width: 100 }} />
                    <View>
                        <Text style={styles.logoText}>DIGITAL <br />BANK</Text>
                    </View>
                </View>
                <Text style={{ color: "white" }}>Ver: 23.36</Text>
            </View>
            <View style={{ top: 200 }}>
                <TextInput style={styles.userView}
                    placeholder='Tên đăng nhập / Số điện thoại'
                    onChangeText={setUser}
                    value={user}
                ></TextInput>
                <TextInput
                    style={styles.userView}
                    placeholder='Mật khẩu'
                    onChangeText={setPassword}
                    value={password}
                ></TextInput>
                <TextInput
                    style={styles.userView}
                    placeholder='Họ và tên'
                    onChangeText={setName}
                    value={name}
                ></TextInput>
                <TouchableOpacity style={styles.button}
                    onPress={() => {
                        if (user != "" && password != "" && name != "") {
                                if (accounts.some(account => account.user === user)) {
                                    alert("tai khoan da ton tai")
                                } else {
                                    post(user, password,name);
                                    console.log("Dang ki thanh cong"+user+password+name)
                                    Navigation.push("DangNhap")
                                }
                        }
                        else alert("Hay nhap du thong tin")

                    }}
                >
                    <Text style={styles.buttonText}>Đăng kí</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: "space-between",
    },
    container: {
        flex: 1,
    },
    userView: {
        width: "85%",
        marginHorizontal: "auto",
        marginVertical: 20,
        backgroundColor: "#1a1a1b",
        borderRadius: 5,
        height: 60,
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 700,
        color: "gray"
    },
    passView: {
        width: "85%",
        flexDirection: "row",
        marginHorizontal: "auto",
        justifyContent: "space-between"
    },
    passInput: {
        backgroundColor: "#1a1a1b",
        borderRadius: 5,
        height: 60,
        width: "55%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pass: {
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 700,
        color: "gray",
        width: "100%",
        height: "100%"
    },
    logoText: {
        color: "white",
        fontSize: 10,
        marginHorizontal: 7,
        marginVertical: "auto",
        fontWeight: 600
    },
    button: {
        height: 60,
        backgroundColor: "#44336a",
        width: "37%",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"

    },
    buttonText: {
        color: "white",
        fontWeight: 700
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 10,
    },
    greenText: {
        color: "#31a180",
        fontWeight: 700,
        fontSize: 17
    }
});