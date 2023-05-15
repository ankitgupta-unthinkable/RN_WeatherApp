import { View, Text, StyleSheet } from "react-native";
import { PRIMARY, SECONDARY } from "../constants/colors";

export default function CityWeatherTile({ item }) {
    return (
        <View style={styles.cityTile}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.cityName}>{item.city}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>

                <Text style={styles.temperature}>{item.temp}{'\u00b0'}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cityName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    cityTile: {
        width: '100%',
        height: 80,
        backgroundColor: PRIMARY,
        borderRadius: 14,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginBottom: 20,
    },
    temperature: {
        fontSize: 42,
        fontWeight: 'bold',
        color: SECONDARY,
    },
    time: {
        fontSize: 14,
        fontWeight: '900',
        color: SECONDARY,
        marginTop: 4,
    }
});