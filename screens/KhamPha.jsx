import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function App(Navigation) {
    Navigation = useNavigation();
    const account = {
        "name" : "quy trinh",
        "user" : "0949194600",
        "balance": "100000000"
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", backgroundColor: "white", padding: 10, }}>
                <Image source={require("../pics/avatar.jpg")} style={{ height: 50, width: 50, margin: 5 }} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: 600, margin: 5}}>{account.name}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center", gap: 15 }}>
                    <Ionicons name='qr-code' color={"#553d82"} size={25} />
                    <Ionicons name='chatbox' color={"#553d82"} size={25} />
                    <Ionicons name='notifications' color={"#553d82"} size={25} />
                </View>
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.content}>
                    <Image source={require("../pics/icon1.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Báo cáo phân tích thi chi</Text>
                        <Text style={styles.text}>Trả lời câu hỏi: tôi đã tiêu tiền vào những khoản gì?</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon2.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Báo cáo thu chi tông hợp</Text>
                        <Text style={styles.text}>Xu hướng thu chi hiện tại và quá khứ của bạn như thế nào?</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon3.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Giới hạn chi tiêu</Text>
                        <Text style={styles.text}>Đặt giới hạn mức chi tiêu cho danh mục và nhận thông báo khi chạm giới hạn.</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon4.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Báo cáo tổng tài sản</Text>
                        <Text style={styles.text}>Tổng tài sản trên Timo của bạn tăng hay giảm qua mỗi tháng?</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon5.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Đầu tư chứng chỉ quỹ VCAM</Text>
                        <Text style={styles.text}>Bước tiến tới tương lai tự do tài chính của bạn</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon5.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Đầu tư chứng chỉ quỹ Vinacapital</Text>
                        <Text style={styles.text}>Bước tiến tới tương lai tự do tài chính của bạn</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon6.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Thẻ Tín dụng Visa</Text>
                        <Text style={styles.text}>Miễn phí trọn đời 100%. Làm thẻ trong 2 phút</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon7.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Bảo hiểm du lịch</Text>
                        <Text style={styles.text}>Du lịch toàn cầu chỉ từ 23.000 VND/ ngày</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={require("../pics/icon8.jpg")} style={{height:40,width:40,margin:10}}/>
                    <View style ={styles.box}>
                        <Text style={styles.til}>Khoản vay ngân hàng Bản Việt</Text>
                        <Text style={styles.text}>Khoản vay cho nhà, xe và kinh doanh</Text>
                    </View>
                </View>

            </ScrollView>
            <View style={{ flexDirection: "row",justifyContent:"space-between", padding:20,bottom:1,width:"100%",borderTopLeftRadius:20,borderTopRightRadius:20,position:"absolute",backgroundColor:"white",height:70 }}>
                <TouchableOpacity onPress={()=>Navigation.navigate("Home",account)}><Ionicons style={{margin:"auto"}} name="home" color={"lightgrey"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Trang chủ</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>Navigation.navigate("KhamPha")}><Ionicons  style={{margin:"auto"}} name="bar-chart" color={"#eb3300"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Khám phá</Text></TouchableOpacity>
                <View><TouchableOpacity onPress={()=>Navigation.navigate("KhamPha")} style={{top:-40,height:50,width:50,backgroundColor:"#563d81",margin:"auto",borderRadius:"50%"}}><Ionicons style={{margin:"auto"}} name='swap-horizontal' color={"lightgray"} size={30} /></TouchableOpacity>
                <Text style={{margin:"auto", fontSize:12,top:-16}}>Chuyển tiền</Text></View>
                <TouchableOpacity onPress={()=>Navigation.navigate("NguoiNhan")}><Ionicons style={{margin:"auto"}} name="people" color={"lightgray"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Người nhận</Text></TouchableOpacity>
                <View ><Ionicons style={{margin:"auto"}} name="list" color={"lightgray"} size={30} />
                <Text style={{margin:"auto", fontSize:12}}>Khác</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body:{
        padding:10,
        paddingBottom:100
    },
    content:{
        margin: 10,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        borderRadius:10,
        paddingVertical:10,
        flexDirection:'row'
    },
    til:{
        fontWeight:700,
        fontSize:15
    },
    text:{
        color:"grey",
        fontSize:13
    },
    box:{
        flex:0.96
    }
})