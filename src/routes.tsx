import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './screens/Home/Home';
import { Passwords } from './screens/Passwords/Passwords';

import { Ionicons } from '@expo/vector-icons'

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
                            return <Ionicons size={30} color={"#e5bf3c"} name="home" />
                        }
                        return <Ionicons size={30} color={"#e5bf3c"} name="home-outline" />

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
                            return <Ionicons size={30} color={"#e5bf3c"} name="lock-closed" />
                        }
                        return <Ionicons size={30} color={"#e5bf3c"} name="lock-closed-outline" />

                    }
                }}
            />
        </Tab.Navigator>
    )
}
