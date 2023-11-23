import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

export default function App({ route }) {
    const Navigation = useNavigation();
    route = useRoute();
    const [user,name] = route.params
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')
    async function post(user, password, name) {
        const res = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(
                {
                    name, user, password, "balance": 0,"fav":[],"bank":'Timo'
                }
            )
        })
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 15 }}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <Image source={require("../pics/back.jpg")} style={{ height: 35, width: 35 }} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",backgroundColor:"lightgray",borderRadius:10,margin:10}}>
                <View style={[styles.progess,{backgroundColor:"grey"}]}/>
            </View>
            <Text style={{fontSize:28,marginHorizontal:10}}>Tạo</Text>
            <Text style={{fontSize:20,fontWeight:700,marginHorizontal:10}}>Mật khẩu đăng nhập</Text>
            <TextInput secureTextEntry={true} onChangeText={setPassword} value={password} style={styles.input} placeholder='Mật khẩu đăng nhập' />
            <TextInput secureTextEntry={true} onChangeText={setRepassword} value={repassword} style={styles.input} placeholder='Nhập lại mật khẩu đăng nhập' />
            <TouchableOpacity
                onPress={()=>{
                    if(password!="" && repassword!="" && password===repassword)
                    {
                        post(user,password,name)
                        Navigation.navigate("DangKiThanhCong")
                    }
                    else Navigation.navigate("InputError")
                }}
                style={styles.submit}><Text style={{ color: "white", fontWeight: 700 }}>TẠO TÀI KHOẢN</Text></TouchableOpacity>
        </View>
    );
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
    progess:{
        flex:0.75,
        height:5,
        borderRadius:10
    }
})