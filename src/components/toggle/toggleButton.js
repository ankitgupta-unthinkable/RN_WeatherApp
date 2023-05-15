import { View, Text, StyleSheet, Pressable } from "react-native";
import { DARKGREY, GREY, LIGHTBLUE } from "../../constants/colors";

export default function ToggleButton({ units, onSelect, selectedUnit }) {
    return (
        <View style={styles.toggleContainer}>
            {
                units.map((unit,index) => ( 
                    <Pressable style={unit === selectedUnit ? styles.selectedContainer : styles.unSelectedContainer} onPress={() => onSelect(unit)} key={index}>
                        <Text style={unit === selectedUnit ? styles.selectedText : styles.unSelectedText}>{unit}</Text>
                    </Pressable>
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    toggleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: DARKGREY,
        borderRadius: 10,
        padding: 4,
        marginBottom: 10,
    },
    selectedContainer: {
        borderRadius: 10,
        flex: 1,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GREY,
    },
    selectedText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    unSelectedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    unSelectedText: {
        fontSize: 16,
        fontWeight: '700',
    },
});