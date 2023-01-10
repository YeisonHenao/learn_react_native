import {View , Text , Card, CardProps } from 'react-native-ui-lib'

const Notifications =() => {
  return (
    <View style={{
        display:"flex",
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text blue50 text30 center>Hello world!</Text>
    </View>
  );
}

export default Notifications;