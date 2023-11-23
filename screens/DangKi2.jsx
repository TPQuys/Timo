import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

export default function App({ route }) {
    const Navigation = useNavigation();
    route = useRoute();
    const user = route.params
    var [name, setName] = useState("");
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
            <Text style={{fontSize:28,marginHorizontal:10}}>Vui lòng thêm</Text>
            <Text style={{fontSize:20,fontWeight:700,marginHorizontal:10}}>thông tin của bạn</Text>
            <TextInput onChangeText={setName} value={name} style={styles.input} placeholder='Họ và tên' />
            <TouchableOpacity
                style={styles.submit} 
                onPress={()=>{
                    if(name!="") Navigation.push("DangKi3",[user,name])
                    else Navigation.navigate("InputError")
                }}
                ><Text style={{ color: "white", fontWeight: 700 }}>TIẾP THEO</Text></TouchableOpacity>
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
        flex:0.5,
        height:5,
        borderRadius:10
    }
})