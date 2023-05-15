import { StyleSheet, View, Text } from "react-native";
import { BACKGROUND } from "../constants/colors";

export default function MapScreen() {
    return (
        <View style={styles.container}>
            <Text>Map Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
    }
});