import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export function tabs(account,tab) {
    const Navigation = useNavigation();
    var home ="lightgrey"
    var khampha ="lightgrey"
    var nguoinhan ="lightgrey"

    if(tab==="Home") home = "#563d81" 
    else if (tab==="KhamPha") khampha ="#eb3300"
    else if (tab ==="NguoiNhan") nguoinhan ="#ff9324"
    return <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, bottom: 1, width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20, position: "absolute", backgroundColor: "white", height: 70,shadowOpacity:0.5,shadowRadius:5 }}>
        <TouchableOpacity onPress={() => Navigation.navigate("Home", account)}><Ionicons style={{ margin: "auto" }} name="home" color={home} size={30} />
            <Text style={{ margin: "auto", fontSize: 12 }}>Trang chủ</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate("KhamPha", account)}><Ionicons style={{ margin: "auto" }} name="bar-chart" color={khampha} size={30} />
            <Text style={{ margin: "auto", fontSize: 12 }}>Khám phá</Text></TouchableOpacity>
        <View><TouchableOpacity onPress={() => Navigation.navigate("ChuyenTien", account)} style={{ top: -40, height: 50, width: 50, backgroundColor: "#563d81", margin: "auto", borderRadius: "50%" }}><Ionicons style={{ margin: "auto" }} name='swap-horizontal' color={"lightgray"} size={30} /></TouchableOpacity>
            <Text style={{ margin: "auto", fontSize: 12, top: -16 }}>Chuyển tiền</Text></View>
        <TouchableOpacity onPress={() => Navigation.navigate("NguoiNhan", account)}><Ionicons style={{ margin: "auto" }} name="people" color={nguoinhan} size={30} />
            <Text style={{ margin: "auto", fontSize: 12 }}>Người nhận</Text></TouchableOpacity>
        <View ><Ionicons style={{ margin: "auto" }} name="list" color={"lightgray"} size={30} />
            <Text style={{ margin: "auto", fontSize: 12 }}>Khác</Text></View>
    </View> 
}