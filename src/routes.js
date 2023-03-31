import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Films from "./screens/Films";
import Profile from "./screens/Profile";

import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor: '#272B30',
                    borderTopWidth: 0,
                    elevation: 0,
                    height: 60
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({_, size, focused})=>{
                        if(focused){
                            return <Ionicons name='home' size={size} color={'red'}/>
                        }
                        return <Ionicons name='home-outline' size={size} color={'red'}/>
                    }
                }}
            />
            <Tab.Screen
                name="Films" 
                component={Films}
                options={{
                    headerShown: false,
                    tabBarIcon: ({_, size, focused})=>{
                        if(focused){
                            return <Ionicons name='film' size={size} color={'red'}/>
                        }
                        return <Ionicons name='film-outline' size={size} color={'red'}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon:({_,size,focused})=>{
                        if(focused){
                            return <Ionicons name="person" size={size} color={'red'}/>
                        }
                        return <Ionicons name="person-outline" size={size} color={'red'}/>
                    }
                }}    
            />
        </Tab.Navigator>
    )
}

export default MyTabs;