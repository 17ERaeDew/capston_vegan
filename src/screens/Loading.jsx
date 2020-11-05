import * as React from 'react';
import { ActivityIndicator, StyleSheet, Image, View } from "react-native";

export default function Loading({navigation}){
    return (
        <View style={styles.container}>
            <Image
                style={styles.loading}
                source={require('../assets/images/loading.png')}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-end',
        // paddingHorizontal: 30,
        // paddingVertical: 100
    },
    loading: {
        width: '100%',
        height: '100%'
    }
})