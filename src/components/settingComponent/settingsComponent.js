import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CELSIUS, DISTANCE, FAHRENHEIT, H_PRESSURE, INCHES, KILOMETER, KILO_PRESSURE, KM_PER_SEC, KNOTS, METER_PER_SEC, MILES, MILIMETER, MM, PERCIPITATION, PRESSURE, TEMPERATIRE, WIND_SPEED } from "../../constants/app_string";
import { PRIMARY, SECONDARY } from "../../constants/colors";
import ToggleButton from "../toggle/toggleButton";

export default function SettingComponent() {
    const [unit, setUnit] = useState(CELSIUS);
    const [wind, setWind] = useState(KM_PER_SEC);
    const [pressure, setPressure] = useState(H_PRESSURE);
    const [perciption, setPercipition] = useState(MILIMETER);
    const [distance, setDistance] = useState(KILOMETER);

    return (
        <View style={styles.unitContainer}>
            <Text style={styles.unitType}>{TEMPERATIRE}</Text>
            <ToggleButton units={[CELSIUS, FAHRENHEIT]} selectedUnit={unit} onSelect={setUnit} />

            <Text style={[styles.unitType, { marginTop: 20 }]}>{WIND_SPEED}</Text>
            <ToggleButton units={[KM_PER_SEC, METER_PER_SEC, KNOTS]} selectedUnit={wind} onSelect={setWind} />

            <Text style={[styles.unitType, { marginTop: 20 }]}>{PRESSURE}</Text>
            <ToggleButton units={[H_PRESSURE, INCHES, KILO_PRESSURE, MM]} selectedUnit={pressure} onSelect={setPressure} />

            <Text style={[styles.unitType, { marginTop: 20 }]}>{PERCIPITATION}</Text>
            <ToggleButton units={[MILIMETER, INCHES]} selectedUnit={perciption} onSelect={setPercipition} />

            <Text style={[styles.unitType, { marginTop: 20 }]}>{DISTANCE}</Text>
            <ToggleButton units={[KILOMETER, MILES]} selectedUnit={distance} onSelect={setDistance} />
        </View>
    );
}

const styles = StyleSheet.create({
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
});