import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({ route }) {
    const Navigation = useNavigation();
    var [trans,setTrans] = useState('');
    var [note,setNote] = useState('');
    var [account,setAccounts] = useState({});
    route = useRoute()
    const [id,sendAccount] = route.params
    useEffect(()=>{
        async function fetchData(){
        const response  = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/"+id)
        const responseJSON = await response.json();
        setAccounts(responseJSON);
        }
        fetchData();
    },[])
    const [upload,setUpload] = useState({});
        async function guiTien(send){
        const response  = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/"+sendAccount.id,{
            method:"PUT",
            headers:{ 'content-type': 'application/json' },
            body:JSON.stringify(
                { balance:send}
            )})
        }
        async function nhanTien(take){
            const response  = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account/"+account.id,{
                method:"PUT",
                headers:{ 'content-type': 'application/json' },
                body:JSON.stringify(
                    { balance:take}
                )})
            }
    return (
        <View style={styles.container}>
            <TextInput onChangeText={setTrans} value={trans} style={styles.input} placeholder='Nhập số tiền' />
            <TextInput onChangeText={setNote} value={note} style={styles.input} placeholder='Nhập lời nhắn (tùy chọn)' />
            <TouchableOpacity
            onPress={()=>{
                let send = sendAccount.balance-trans
                let take = trans*1+account.balance
                guiTien(send);nhanTien(take)
                account.balance = send
                Navigation.navigate("Home",account)
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