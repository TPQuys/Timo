import { StyleSheet, Text, View, Image, TextInput,ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App(Navigation) {
    Navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>Lỗi</Text>
                <Image source={require("../pics/error.jpg")} style={{height:170,width:170,margin:20}}/>
                <Text style={styles.nofi}>Thông tin nhập thiếu hoặc không hợp lệ</Text>
            </View>
            <TouchableOpacity onPress={()=>Navigation.goBack()} style={styles.footer}>QUAY LẠI</TouchableOpacity>
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
        padding:10,   
        justifyContent:"center",
        alignItems:"center",
        fontSize:20,
        color:"white",
    },
})