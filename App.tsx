import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { SenhasProvider } from './src/hooks/useSenhasContext';
import { PassProvider } from './src/hooks/usePassContext';



export default function App() {
  return (
    <NavigationContainer>
      <SenhasProvider>
        <PassProvider>
          <Routes />
        </PassProvider>
      </SenhasProvider>
    </NavigationContainer>
  );
}


