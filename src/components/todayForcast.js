import { View, StyleSheet, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { TODAY_FORCAST } from '../constants/app_string';
import { PRIMARY, SECONDARY } from '../constants/colors';

export default function TodayForcast() {
    const weatherStore = useSelector(state => state.weather);
    const hourlyData = weatherStore.weatherData.forecast.forecastday[0].hour;

    return (
        <View style={styles.todayForcast}>
            <Text style={styles.forcastHeading}>{TODAY_FORCAST}</Text>
            <View style={styles.forcastContainer}>
                <View style={styles.forcastColumn}>
                    <Text style={styles.timeText}>9:00 AM</Text>
                    <Image
                        source={require('./../../assets/sunny.png')}
                        style={styles.forcastImage}
                        resizeMode='contain'
                    />
                    <Text style={styles.forcastTemp}>{parseInt(hourlyData[9]['temp_c'])}{'\u00b0'}</Text>
                </View>
                <View style={{ width: 0.5, backgroundColor: '#babdc2' }} />
                <View style={styles.forcastColumn}>
                    <Text style={styles.timeText}>12:00 PM</Text>
                    <Image
                        source={require('./../../assets/sunny.png')}
                        style={styles.forcastImage}
                        resizeMode='contain'
                    />
                    <Text style={styles.forcastTemp}>{parseInt(hourlyData[12]['temp_c'])}{'\u00b0'}</Text>
                </View>
                <View style={{ width: 0.5, backgroundColor: '#babdc2' }} />
                <View style={styles.forcastColumn}>
                    <Text style={styles.timeText}>3:00 PM</Text>
                    <Image
                        source={require('./../../assets/sunny.png')}
                        style={styles.forcastImage}
                        resizeMode='contain'
                    />
                    <Text style={styles.forcastTemp}>{parseInt(hourlyData[15]['temp_c'])}{'\u00b0'}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    todayForcast: {
        backgroundColor: PRIMARY,
        width: '100%',
        borderRadius: 14,
        padding: 20,
        marginBottom: 30,
    },
    forcastHeading: {
        textTransform: 'uppercase',
        color: SECONDARY,
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 14,
    },
    forcastColumn: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    timeText: {
        fontWeight: 'bold',
        color: SECONDARY,
        fontSize: 18
    },
    forcastImage: {
        height: 70,
        width: 70,
    },
    forcastTemp: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    forcastContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});