import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './screens/Home/Home';
import { Passwords } from './screens/Passwords/Passwords';
import { Lixeira } from "./screens/Lixeira/Lixeira";

import { EvilIcons, Feather, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "black",
                    height: 60
                }
            }}>
            <Tab.Screen
                name="principal"
                component={Home}
                options={{

                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons size={35} color={"#e5bf3c"} name="home" />
                        }
                        return <Ionicons size={35} color={"#e5bf3c"} name="home-outline" />

                    }
                }}
            />
            <Tab.Screen
                name="senhas"
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons size={35} color={"#e5bf3c"} name="lock-closed" />
                        }
                        return <Ionicons size={35} color={"#e5bf3c"} name="lock-closed-outline" />

                    }
                }}
            />

            <Tab.Screen
                name="lixeira"
                component={Lixeira}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <FontAwesome size={35} color={"#e5bf3c"} name="trash" />
                        }
                        return <FontAwesome size={35} color={"#e5bf3c"} name="trash-o" />

                    }
                }}
            />

        </Tab.Navigator>
    )
}
