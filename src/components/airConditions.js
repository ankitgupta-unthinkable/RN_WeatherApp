import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import { AIR_CONDITION, CHANCE_OF_RAIN, REAL_FEEL, SEE_MORE, UV_INDEX, WIND } from "../constants/app_string";
import { PRIMARY, SECONDARY } from "../constants/colors";

export default function AirCondition() {
    const weatherStore = useSelector(state => state.weather);

    return (
        <View style={styles.airConditionContainer}>
            <View style={styles.row}>
                <Text style={styles.airConditionHeading}>{AIR_CONDITION}</Text>
                <View style={styles.seeMoreButton}>
                    <Text style={styles.seeMoreText}>{SEE_MORE}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 8, }}>
                        <MaterialIcons color={SECONDARY} size={24} name="device-thermostat" />
                    </View>
                    <View>
                        <Text style={styles.feelText}>{REAL_FEEL}</Text>
                        <Text style={styles.feelTemp}>{parseInt(weatherStore.weatherData.current['feelslike_c'])}{'\u00b0'}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 20, }}>
                    <View style={{ marginRight: 8, }}>
                        <MaterialIcons color={SECONDARY} size={24} name="waves" />
                    </View>
                    <View>
                        <Text style={styles.feelText}>{WIND}</Text>
                        <Text style={styles.feelTemp}>{weatherStore.weatherData.current['wind_kph']} km/h</Text>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 8, }}>
                        <MaterialIcons color={SECONDARY} size={24} name="format-color-reset" />
                    </View>
                    <View>
                        <Text style={styles.feelText}>{CHANCE_OF_RAIN}</Text>
                        <Text style={styles.feelTemp}>{weatherStore.weatherData.forecast.forecastday[0].day['daily_chance_of_rain']}%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginRight: 20, }}>
                    <View style={{ marginRight: 8, }}>
                        <MaterialIcons color={SECONDARY} size={24} name="wb-sunny" />
                    </View>
                    <View>
                        <Text style={styles.feelText}>{UV_INDEX}</Text>
                        <Text style={styles.feelTemp}>{weatherStore.weatherData.current.uv}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    airConditionContainer: {
        backgroundColor: PRIMARY,
        width: '100%',
        borderRadius: 14,
        padding: 20,
        marginBottom: 50,
    },
    airConditionHeading: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: SECONDARY,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    seeMoreButton: {
        width: 100,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#4193F7',
        justifyContent: 'center',
        paddingBottom: 3,
    },
    seeMoreText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
    feelText: {
        fontSize: 18,
        fontWeight: '500',
        color: SECONDARY
    },
    feelTemp: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
});