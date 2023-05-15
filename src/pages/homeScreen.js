import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import getForcastWeather from "../api/weather_repository";
import AirCondition from "../components/airConditions";
import ForcastForSevenDays from "../components/forcast/focast";
import TodayForcast from "../components/todayForcast";
import { CHANCE_OF_RAIN } from "../constants/app_string";
import { BACKGROUND } from "../constants/colors";
import { fetchWeather } from "../store/weatherData/action";

export default function HomeScreen() {
    const dispatch = useDispatch();
    const weatherStore = useSelector(state => state.weather);
    const locationStore = useSelector(state => state.location);

    useEffect(() => {
        dispatch(fetchWeather(`${locationStore.latitude},${locationStore.longitude}`, 7));
    }, []);

    return (
        weatherStore.loading ?
            <View style={styles.loader}>
                <ActivityIndicator size={'large'} />
            </View> :
            weatherStore.error ?
                <View style={styles.loader}>
                    <Text style={styles.error}>Something went wrong! Please try again later.</Text>
                </View> :
                <ScrollView style={[styles.container, { paddingBottom: 80, }]} showsVerticalScrollIndicator={false}>
                    <View style={styles.column}>
                        <Text style={styles.headline}>{weatherStore.weatherData.location.name}</Text>
                        <Text style={styles.rainChance}>{CHANCE_OF_RAIN}: {weatherStore.weatherData.forecast.forecastday[0].day['daily_chance_of_rain']}%</Text>
                        <Image
                            source={require('./../../assets/sunny.png')}
                            style={styles.mainImage}
                            resizeMode='contain'
                        />
                        <Text style={styles.temperature}>{weatherStore.weatherData.current['temp_c']}{'\u00b0'}</Text>
                        <TodayForcast />
                        <ForcastForSevenDays />
                        <AirCondition />
                    </View>
                </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 80,
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
    rainChance: {
        fontSize: 17,
        fontWeight: '400',
        marginTop: 10,
        color: '#9EA2A9',
    },
    mainImage: {
        width: 200,
        height: 200,
        marginTop: 30,
        marginBottom: 40,
    },
    temperature: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
    },
    error: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});