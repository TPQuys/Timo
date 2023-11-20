import { Image,View } from "react-native"
export default function header({account}){
    retrun(
        <View style={{flexDirection:"row"}}>
            <Image source={require("../pics/avatar.jpg")} style={{height:100,width:100}}/>
            <View>
                <Text>{account.name}</Text>
            </View>
            <View>asdasdasdasd</View>
        </View>
    )
}