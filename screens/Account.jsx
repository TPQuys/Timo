import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App({ route }) {
    const Navigation = useNavigation();
    route = useRoute();
    var send = route.params
    var [bank, setBank] = useState("")
    var [user, setUser] = useState("")
    var [account,setAccount] = useState(null);
    var [accounts, setAccounts] = useState([]);
    useEffect(()=>{
        async function fetchData(){
        const response  = await fetch("https://655b4d61ab37729791a8e04d.mockapi.io/account")
        const responseJSON = await response.json();
        setAccounts(responseJSON);
        }
        fetchData();
    },[])

    function renderName(account){
        if(account!=null)
        return  <Text style={styles.input}>{account.name}</Text>
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 15 }}>
                <TouchableOpacity onPress={() => Navigation.goBack()}>
                    <Image source={require("../pics/back.jpg")} style={{ height: 35, width: 35 }} />
                </TouchableOpacity>
                <Text style={{ fontWeight: 500, fontSize: 20 }}>Thêm tài khoản</Text>
                <TouchableOpacity onPress={() => Navigation.navigate("Home", send)}>
                    <Text style={{ color: "#563d81", fontSize: 16 }}>Hủy</Text>
                </TouchableOpacity>
            </View>
            <TextInput onChangeText={setBank} value={bank} style={styles.input} placeholder='Tên ngân hàng' />
            <TextInput onChangeText={setUser} onBlur={()=>{
                let acc = accounts.find((account) => account.bank === bank && account.user == user)
                        if (acc != null) {
                            setAccount(acc)
                        }
        else 
        console.log("null")
            }} value={user} style={styles.input} placeholder='Số tài khoản' />
            {
                renderName(account)
            }
           
            <TouchableOpacity
                onPress={() => {
                    if (bank != "" && user != "") {
                        let acc = accounts.find((account) => account.bank === bank && account.user == user)
                        if (acc != null) {
                            console.log("true")
                            Navigation.navigate("Chuyen", [acc.id,send])
                        }
                        else
                            Navigation.navigate("InputError")

                    }
                    else Navigation.navigate("InputError")
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
    input: { margin: 10, shadowOpacity: 0.3, shadowRadius: 5, borderRadius: 5, paddingVertical: 22, gap: 10,padding:8, fontSize:15, fontWeight:500,color:"grey" },

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