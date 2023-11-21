import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({ route }) {
    const Navigation = useNavigation();
    route = useRoute();
    var send = route.params
    var [bank, setBank] = useState("")
    var [code, setCode] = useState("")
    var [accounts, setAccounts] = useState([]);
    useEffect(()=>{
        async function fetchData(){
        const response  = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account")
        const responseJSON = await response.json();
        setAccounts(responseJSON);
        }
        fetchData();
    },[])
    return (
        <View style={styles.container}>
            <TextInput onChangeText={setBank} value={bank} style={styles.input} placeholder='Tên ngân hàng' />
            <TextInput onChangeText={setCode} value={code} style={styles.input} placeholder='Số tài khoản' />
            <TouchableOpacity
                onPress={() => {
                    if (bank != "" && code != "") {
                        let account = accounts.find((account) => account.bank === bank && account.code === code)
                        if (account != null) {
                            Navigation.navigate("Chuyen", [account,send])
                        }
                        else
                            Navigation.navigate("Error")

                    }
                    else Navigation.navigate("Error")
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
    input: {
        margin: 10,
        borderWidth: 1,
        paddingVertical: 20,
        padding: 5
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

})