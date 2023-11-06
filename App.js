
import Home from './screens/Home'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tabs = createBottomTabNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({route}) =>({
          tabBarStyle: {
            borderTopRightRadius: 20,
            borderTopLeftRadius:20,
            shadowColor: "#000",
            shadowOffset: {
              width: 4,
              height: 4,
            },
            position:"absolute",
            shadowOpacity: 0.2,
            shadowRadius: 6,
            height: 70,
            
          },
          tabBarLabel:""
          
        })}
      >
        <Tabs.Screen name='Trangchu' component={Home}></Tabs.Screen>
        <Tabs.Screen name='Khampha' component={Home}></Tabs.Screen>
        <Tabs.Screen 
        name='ChuyenTien' 
        component={Home}
        options={{
          tabBarIcon:({focused}) =>(
            
            <Ionicons name='home' size={30} color={"grey"} style={{
              top : -30,
            }}/>
            
          )
        }}
        ></Tabs.Screen>
        <Tabs.Screen name='Nguoinhan' component={Home}></Tabs.Screen>
        <Tabs.Screen name='khac' component={Home}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>
  )
}
