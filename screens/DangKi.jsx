import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

export default function App({ route }) {
    const Navigation = useNavigation();
    route = useRoute();
    var [user, setUser] = useState("");
    const accounts = route.params
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
            <Text style={{fontSize:28,marginHorizontal:10}}>Bắt đầu với</Text>
            <Text style={{fontSize:20,fontWeight:700,marginHorizontal:10}}>số điện thoại của bạn</Text>
            <TextInput onChangeText={setUser} value={user} style={styles.input} placeholder='Số điện thoại di động' />
            <TouchableOpacity
            onPress={()=>{
                let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
                if(user!="" && vnf_regex.test(user)){
                if(!accounts.some((account) => account.user ===user))
                    Navigation.navigate("DangKi2",user)
                    else alert("Tài khoản đã tồn tại")
                }
                else Navigation.navigate("InputError")
            }}
            
                style={styles.submit}><Text style={{ color: "white", fontWeight: 700 }}>TIẾP THEO</Text></TouchableOpacity>
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
        flex:0.25,
        height:5,
        borderRadius:10
    }
})