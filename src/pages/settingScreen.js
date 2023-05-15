import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Pressable, Switch } from "react-native";
import SettingComponent from "../components/settingComponent/settingsComponent";
import { AWARE, GENERAL, LOCATION, LOCATION_WEATHER, NOTIFICATION, SETTING, TEMPERATIRE, UNITS } from "../constants/app_string";
import { BACKGROUND, GREY, LIGHTBLUE, PRIMARY, SECONDARY, WHITE } from "../constants/colors";

export default function SettingScreen() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.heading}>{SETTING}</Text>
                <View>
                    <Text style={styles.subHeading}>{TEMPERATIRE}</Text>
                    <SettingComponent />

                    <View style={{ marginTop: 30 }} />

                    <Text style={styles.subHeading}>{NOTIFICATION}</Text>
                    <View style={styles.unitContainer}>
                        <View style={[styles.row]}>
                            <Text style={[styles.subHeading, { marginBottom: 4 }]}>{NOTIFICATION}</Text>
                            <Switch
                                style={styles.switchButton}
                                thumbColor={WHITE}
                                trackColor={{ false: GREY, true: LIGHTBLUE }}
                                value={true}
                            />
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>{AWARE}</Text>
                    </View>

                    <View style={{ marginTop: 30 }} />

                    <Text style={styles.subHeading}>{GENERAL}</Text>
                    <View style={styles.unitContainer}>
                        <View style={[styles.row]}>
                            <Text style={[styles.subHeading, { marginBottom: 4 }]}>12-Hour Time</Text>
                            <Switch
                                style={styles.switchButton}
                                thumbColor='white'
                                trackColor={{ false: 'grey', true: '#4193F7' }}
                                value={true}
                            />
                        </View>
                        <View style={{ backgroundColor: '#d5d8de', height: 1, marginVertical: 20 }} />
                        <View style={[styles.row]}>
                            <Text style={[styles.subHeading, { marginBottom: 4 }]}>{LOCATION}</Text>
                            <Switch
                                style={styles.switchButton}
                                thumbColor='white'
                                trackColor={{ false: 'grey', true: '#4193F7' }}
                                value={true}
                            />
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>{LOCATION_WEATHER}</Text>
                    </View>

                    <View style={{ marginTop: 50 }} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BACKGROUND,
        padding: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 30,
    },
    subHeading: {
        fontSize: 18,
        fontWeight: '800',
        color: 'black',
        marginBottom: 12,
    },
    unitContainer: {
        backgroundColor: PRIMARY,
        width: '100%',
        borderRadius: 14,
        padding: 18,
    },
    unitType: {
        textTransform: 'uppercase',
        color: SECONDARY,
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 20,
    },
    unitContainer: {
        backgroundColor: PRIMARY,
        width: '100%',
        borderRadius: 14,
        padding: 18,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchButton: {
    }
});