import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name='close' color={"white"} size={30}
                    style={{ margin: 20 }} />
            </TouchableOpacity>
            <Text style={styles.header}>Nhập mã bảo mật</Text>
            <View style={styles.dots}>
                <Ionicons color={"#8d7bac"} name='ellipse' size={16}></Ionicons>
                <Ionicons color={"#8d7bac"} name='ellipse' size={16}></Ionicons>
                <Ionicons color={"#8d7bac"} name='ellipse' size={16}></Ionicons>
                <Ionicons color={"#8d7bac"} name='ellipse' size={16}></Ionicons>
            </View>
            <TouchableOpacity>
                <Text style={styles.quetMa}>Quét mã bảo mật?</Text>
            </TouchableOpacity>
            <View style={{ height: "35%" }}></View>
            <View style={styles.table}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>6</Text>
                    </TouchableOpacity>
                </View>  <View style={styles.row}>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>9</Text>
                    </TouchableOpacity>
                </View>  <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.num}></Text>
                    </View>
                    <TouchableOpacity style={styles.column}>
                        <Text style={styles.num}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.column}>
                        <Ionicons name='backspace' style={styles.num}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#563d81"
    },
    header: {
        marginHorizontal: "auto",
        color: "white",
        fontSize: 15
    },
    dots: {
        flexDirection: "row",
        marginHorizontal: "auto",
        width: 120,
        justifyContent: "space-between",
        marginVertical: 20
    },
    quetMa: {
        color: "white",
        marginHorizontal: "auto",
        fontSize: 9,
        margin: 10
    },
    table: {
        width: 300,
        marginHorizontal: "auto",
        height: 240
    },
    row: {
        flexDirection: "row",
        flex: 1,
    },
    column: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#563d81"
    },
    num: {
        color: "white",
        fontWeight: 600,
        fontSize: 30
    }
});