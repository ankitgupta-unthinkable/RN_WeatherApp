import { Image, StyleSheet, View, Text, Pressable, Platform, Alert } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { APP_NAME, WEATHER_APP } from "../constants/app_string";
import { BACKGROUND, LIGHTBLUE, WHITE } from "../constants/colors";
import { useEffect } from "react";
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from "react-redux";
import { setLocationCoOrdinate } from "../store/geoLocation/actions";


export default function SplashScreen({ navigation }){
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const requestPermission = async () => {
    //         var result = await request(
    //             Platform.OS === 'ios' ? PERMISSIONS.IOS.ACCESS_FINE_LOCATION : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    //         );
    //         console.log(result);
    //         if(result === RESULTS.GRANTED){
    //             // fetch co-ordinates
    //             Alert.alert('Success', 'User has granted the location permission');
    //         }else{
    //             // set to default co-ordinate
    //             Alert.alert('Failure', 'User has denied the location permission');
    //         }
    //     }

    //     requestPermission();
    // }, []);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            info => {
                dispatch(setLocationCoOrdinate(
                    info.coords.latitude,
                    info.coords.longitude
                ));
                console.log(info.coords);
            },
            error => console.log('error', error.message)
            );
    }, []);

    return (
        <View style={styles.container} >
            <Image 
                source={require('./../../assets/Umbrella.png')} 
                style={styles.image}
                resizeMode='contain'
            />
            <Text style={styles.headline}>{APP_NAME}</Text>
            <Text style={styles.appName}>{WEATHER_APP}</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('TabBar')}>
                <MaterialIcons color={WHITE} size={22} name="east" /> 
            </Pressable>
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: BACKGROUND,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image:{
        width: 300,
        height: 300,
    },
    headline:{
        color: 'black',
        fontSize: 46,
        fontWeight: 'bold',
    },
    appName:{
        fontSize: 20,
        fontWeight: '400',
    },
    button:{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: LIGHTBLUE,
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
  })