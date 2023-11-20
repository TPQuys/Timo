import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function App(Navigation) {
    Navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>Lỗi đăng nhập</Text>
                <Image source={require("../pics/error.jpg")} style={{height:170,width:170,margin:20}}/>
                <Text style={styles.nofi}>Kết hợp <Text style={{fontWeight:700}}>Tên đăng nhập</Text> và <Text style={{fontWeight:700}}>Mật khẩu</Text> lại không</Text><Text style={styles.nofi}> đúng</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.touch}
                onPress={()=>{
                    Navigation.goBack()
                }}>THỬ LẠI</TouchableOpacity>
                <Text style={{fontSize:25,color:"grey",fontWeight:700}}>|</Text>
                <TouchableOpacity style={styles.touch}>KHÔI PHỤC</TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#563d81",
    },
    body:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    text:{
        marginHorizontal:"auto",
        color:"white",
        fontSize:30
    },
    nofi:{
        color:"white",
        fontSize:16
    },
    footer:{
        borderColor:"white",
        borderWidth:2,
        borderRadius:5,
        margin:20,
        flexDirection:"row",
        padding:10,   
    },
    touch:{
        margin:10,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        fontSize:20,
        color:"white"
    }
})