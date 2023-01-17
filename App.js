// import React from 'react';
// import {SafeAreaView, View, Text} from 'react-native';
// import FirstHead from "./Components/FirstHead";

// const App = () => {
//   return (
//     <SafeAreaView>
//       <FirstHead />
//     </SafeAreaView>
//   );
// };

// export default App;

import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Feed" component={Home} />
        <Drawer.Screen name="Article" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;