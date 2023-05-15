import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { SEVEN_DAY_FORCAST } from "../../constants/app_string";
import { LIGHTGREY, PRIMARY, SECONDARY } from "../../constants/colors";
import { getDayName } from "../../utils/utils";
import FocastListItem from "./forcastListItem";

export default function ForcastForSevenDays() {
    const weatherStore = useSelector(state => state.weather);
    const forecastData = weatherStore.weatherData.forecast.forecastday.map((weather, index) => {
        return {
            key: index,
            maxWeatherTemp: parseInt(weather.day['maxtemp_c']),
            minWeatherTemp: parseInt(weather.day['mintemp_c']),
            weatherType: weather.day.condition.text,
            day: getDayName(weather.date),
        };
    });

    return (
        <View style={styles.forcast}>
            <Text style={styles.forcastHeading}>{SEVEN_DAY_FORCAST}</Text>
            <FlatList 
                data={forecastData}
                keyExtractor={(item) => item.key}
                renderItem={({item}) => (
                    <FocastListItem day={item.day} weather={item.weatherType} maxTemp={item.maxWeatherTemp} minTemp={item.minWeatherTemp} />
                )}
                scrollEnabled={false}
                ItemSeparatorComponent={() => (
                    <View style={{width: '100%', height: 1, backgroundColor: LIGHTGREY, marginVertical: 4,}}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    forcast: {
        backgroundColor: PRIMARY,
        width: '100%',
        borderRadius: 14,
        padding: 20,
        marginBottom: 30,
    },
    forcastHeading: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: SECONDARY,
        marginBottom: 20,
    },
});