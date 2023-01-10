import {View , Text , Image } from "react-native-ui-lib";

const ViewDetail = ({character}) => {
    const data = character;
    return (
        <View>
            <Text>{JSON.stringify(data.name)}</Text>
        </View>
    );
}

export default  ViewDetail;