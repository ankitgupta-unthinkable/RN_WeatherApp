import { StyleSheet, View, Text, ScrollView, TextInput, FlatList, Pressable } from "react-native";
import CityWeatherTile from "../components/cityWeatherTile";
import { SwipeListView } from 'react-native-swipe-list-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BACKGROUND, BLACK, PRIMARY, WHITE } from "../constants/colors";
import { MY_CITY, SEARCH_CITIES } from "../constants/app_string";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../store/weatherData/action";
import { HOME_TAB } from "../constants/app_string";


export default function SearchScreen({ navigation }) {
    const data = [
        {
            city: 'Madrid',
            time: '10:23',
            temp: '31',
        },
        {
            city: 'California',
            time: '12:23',
            temp: '27',
        },
        {
            city: 'NewYork',
            time: '09:30',
            temp: '30',
        },
        {
            city: 'Athnes',
            time: '11:30',
            temp: '33',
        },
    ];
    const [city, setCity] = useState();
    const dispatch = useDispatch();

    const searchCityWeather = () => {
        if(city && city.length > 1){
            dispatch(fetchWeather(city, 7));
            setCity('');
            navigation.navigate(HOME_TAB);
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.column}>
                <Text style={styles.heading}>{MY_CITY}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.inputBox}
                        placeholder={SEARCH_CITIES}
                        onChangeText={(text) => setCity(text)}
                        value={city}
                    />
                    <Pressable style={styles.search} onPress={searchCityWeather}>
                        <MaterialIcons color={BLACK} size={24} name='search' />
                    </Pressable>
                </View>
                <SwipeListView
                    data={data}
                    keyExtractor={(item) => item.city}
                    renderItem={({ item }) => (
                        <CityWeatherTile item={item} />
                    )}
                    renderHiddenItem={() => (
                        <View style={styles.rowBack}>
                            <View style={styles.delete}>
                                <MaterialIcons color={WHITE} size={24} name='close' />
                            </View>
                        </View>
                    )}
                    scrollEnabled={false}
                    leftOpenValue={0}
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND,
        padding: 24,
    },
    column: {},
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 24,
    },
    inputBox: {
        flex: 1,
        height: 50,
        backgroundColor: PRIMARY,
        borderRadius: 12,
        paddingHorizontal: 12,
        fontSize: 16,
        marginBottom: 40,
    },
    delete: {
        height: 76,
        width: 60,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    rowBack: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    search:{
        height: 50,
        width: 50,
        backgroundColor: PRIMARY,
        borderRadius: 12,
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
});