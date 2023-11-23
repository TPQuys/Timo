import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { tabs } from '../js/tabs';
export default function App(Navigation,{route}) {
    route = useRoute()
    Navigation = useNavigation();
    const account = route.params
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
            {tabs(account,"KhamPha")}
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