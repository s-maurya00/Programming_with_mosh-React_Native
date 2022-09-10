import { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

import colors from '../configs/colors';

const ImageInput = ( { imageUri, onChangeImage } ) => {

    useEffect(() => {
        requestPermission();
    }, []);


    const requestPermission = async() => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted) alert("You need to enable camera permission to access the gallary");
    };

    const handlePress = () => {
        if(!imageUri) selectImage();
        else {
            Alert.alert("Delete", "Are you sure you want to delete the image?", [
                { text: "No" },
                { text: "Yes", onPress: () => onChangeImage(null) }
            ]);
        }
    };


    const selectImage = async() => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync(
                {
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    quality: 0.5
                }
            );
            if(!result.cancelled) onChangeImage(result.uri);
        } catch(error) {
            console.log("Error reading the image: ", error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {
                    imageUri
                    ?
                    <Image source={{ uri: imageUri }} style={styles.image} />
                    :
                    <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: "center",
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: "center",
        overflow: "hidden",
        width: 100,
    },

    image: {
        height: "100%",
        width: "100%",
    },
});

export default ImageInput;