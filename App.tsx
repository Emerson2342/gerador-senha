import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { SenhasProvider } from './src/hooks/useSenhasContext';
import { PassProvider } from './src/hooks/usePassContext';
import { LixeiraProvider } from './src/hooks/useLixeiraContext';
import { FocusProvider } from './src/hooks/useFocusContext';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <SenhasProvider>
        <PassProvider>
          <LixeiraProvider>
            <FocusProvider>
              <Routes />
            </FocusProvider>
          </LixeiraProvider>
        </PassProvider>
      </SenhasProvider>
    </NavigationContainer >
  );
}


