import { StyleSheet, Text, View, Image,  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App(Navigation) {
    Navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
            <Image source={require("../pics/dangki.jpg")} style={{height:160,width:190, marginTop:20}}/>
                <Text style={styles.text}>Khởi tạo tài khoản thành công</Text>
                <Text style={styles.nofi}>Cảm ơn bạn đã đăng ký mở tài khoản!</Text>

            </View>
                <TouchableOpacity onPress={()=>Navigation.push("DangNhap")} style={styles.footer}>ĐÓNG</TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#563d81",
    },
    body:{
        alignItems:"center",
        flex:1
    },
    text:{
        marginHorizontal:"auto",
        color:"white",
        fontSize:25,
        margin:30
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
        padding:10,   
        justifyContent:"center",
        alignItems:"center",
        fontSize:20,
        color:"white",
    },
})