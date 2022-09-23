import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { StyleSheet, Text, View } from 'react-native'
import RecipesListContainer from './components/containers/RecipesListContainer'
import Header from './components/layout/Header'
import AppStack from './components/stacks/AppStack'

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Header /> */}
      {/* <RecipesListContainer /> */}
      <AppStack />
      <StatusBar style='auto' />
    </NativeBaseProvider>
  )
}
