import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { SenhasProvider } from './src/hooks/useSenhasContext';
import { PassProvider } from './src/hooks/usePassContext';
import { LixeiraProvider } from './src/hooks/useLixeiraContext';
import { PreHome } from './src/screens/PreHome/PreHome';
import { View, Text } from 'react-native';



export default function App() {
  return (
    <NavigationContainer>
      <SenhasProvider>
        <PassProvider>
          <LixeiraProvider>
            <Routes />
          </LixeiraProvider>
        </PassProvider>
      </SenhasProvider>
    </NavigationContainer >
  );
}


