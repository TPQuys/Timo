import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({ route }) {
    const Navigation = useNavigation();
    var [trans,setTrans] = useState('');
    var [note,setNote] = useState('');
    route = useRoute()
    const [account,sendAccount] = route.params
    console.log(sendAccount)
    console.log(account)
    function chuyenTien(send,take){
        // console.log(send+"tke"+take)
        // fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/"+account.id,{
        //     method:"PUT",
        //     headers:{ 'content-type': 'application/json' },
        //     body:JSON.stringify(
        //         { balance:take}
        //     )
        // }).then(res => res.json())
        fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/"+sendAccount.id,{
            method:"PUT",
            headers:{ 'content-type': 'application/json' },
            body:JSON.stringify(
                { balance:send}
            )
        }).then(res => res.json())
    }
    return (
        <View style={styles.container}>
            <TextInput onChangeText={setTrans} value={trans} style={styles.input} placeholder='Nhập số tiền' />
            <TextInput onChangeText={setNote} value={note} style={styles.input} placeholder='Nhập lời nhắn (tùy chọn)' />
            <TouchableOpacity
            onPress={()=>{
                let take=account.balance+trans
                let send = sendAccount.balance-trans
                chuyenTien(send,take)
                alert("Chuyển tiền thành công")
                Navigation.navigate("Home",sendAccount)
            }}
             style={styles.submit}><Text>XÁC NHẬN</Text></TouchableOpacity>
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