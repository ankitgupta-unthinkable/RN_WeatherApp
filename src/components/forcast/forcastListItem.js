import { View, Image, StyleSheet, Text } from "react-native";
import { SECONDARY } from "../../constants/colors";

export default function FocastListItem({day, weather, maxTemp, minTemp}) {
    return (
        <View style={styles.row}>
            <View style={{flex: 1}}>
                <Text style={styles.weekName}>{day}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flex: 1, }}>
                <Image
                    source={require('./../../../assets/sunny.png')}
                    style={styles.forcastImage}
                    resizeMode='contain'
                />
                <Text style={styles.forcastName} numberOfLines={1}>{weather.replace(/patchy|possible|Partly/gi, '')}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-end'}}>
            <Text style={[styles.score, { fontWeight: 'bold', color: 'black' }]}>
                {maxTemp}
                <Text style={styles.score}>/{minTemp}</Text>
            </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    weekName: {
        fontSize: 16,
        fontWeight: '500',
        color: SECONDARY,
    },
    score: {
        fontSize: 18,
        color: SECONDARY,
        
    },
    forcastName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    forcastImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});