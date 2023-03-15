import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function FirstScreen() {

    return (
        <View>
            <Text> Pierwszy ekran
                <Text style={styles.siemanko}> SIEMANKO  </Text>
                <Ionicons name="ios-radio-sharp" size={24} color="black" />
            </Text>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    siemanko: {
        color: "red"
    }
})