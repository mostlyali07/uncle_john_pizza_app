import { Text, View} from 'react-native';
import React from 'react';
// import SideBar from "SideBar";

const FirstHead = () => {
  return (
    <View style={{backgroundColor: '#000', padding: 15}}>
      <Text style={{color: 'white'}}>Deliver to:</Text>
      <Text style={{color: 'white', fontWeight: 500}}>HOME</Text>
      {/* <SideBar /> */}
    </View>
  );
};

export default FirstHead;
