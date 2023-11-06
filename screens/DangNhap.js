import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
    return (
        <LinearGradient
            colors={['#d3c7e3', '#a47dd5', "#44336a","#211b2b"]}
            style={styles.container}
            starr
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
            <View style={{ height: "57%" }}></View>
            <View>
                <TextInput style={styles.userView}
                    placeholder='Tên đăng nhập / Số điện thoại'
                ></TextInput>
                <View style={styles.passView}>
                <View style={styles.passInput}>
                    <TextInput
                    style={styles.pass}
                        placeholder='Mật khẩu'
                    ></TextInput><Ionicons name='eye' size={20} color={"gray"}/>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity><Text style={styles.greenText}>Đăng ký</Text></TouchableOpacity>
                <Text style={{color:"white"}}> | </Text>
                <TouchableOpacity><Text style={styles.greenText}>Không thể đăng nhập?</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",flex:1}}>
                <View style={{backgroundColor:"#5b4780ff",flex:0.25}}></View>
                <View style={{backgroundColor:"#215f90",flex:0.25}}></View>
                <View style={{backgroundColor:"#c02800",flex:0.25}}></View>
                <View style={{backgroundColor:"#d1781f",flex:0.25}}></View>
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
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:8
    },
    pass:{
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 700,
        color: "gray",
        width:150,
        height:"100%"
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

    },
    buttonText: {
        color: "white",
        fontWeight: 700
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        margin:10,
    },
    greenText:{
        color:"#31a180",
        fontWeight:700,
        fontSize:17
    }
});