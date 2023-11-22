
import Home from './screens/Home'
import KhamPha from './screens/KhamPha'
import NguoiNhan from './screens/NguoiNhan'
import DangNhap from './screens/DangNhap'
import LoginError from './screens/LoginException'
import ChuyenTien from "./screens/ChuyenTien"
import Account from "./screens/Account"
import Chuyen from './screens/Chuyen'
import DangKi from './screens/DangKi'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native'

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='DangNhap' component={DangNhap} />
        <Stack.Screen name='DangKi' component={DangKi} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='ChuyenTien' component={ChuyenTien} />
        <Stack.Screen name='Error' component={LoginError} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='KhamPha' component={KhamPha} />
        <Stack.Screen name='NguoiNhan' component={NguoiNhan} />
      <Stack.Screen name='Chuyen' component={Chuyen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
