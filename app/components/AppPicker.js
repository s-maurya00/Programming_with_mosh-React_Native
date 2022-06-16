import { useState } from 'react';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText';
import Screen from './Screen';
import AppButton from './AppButton';

import colors from '../configs/colors';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, items, onSelectItem, numberOfColumns = 1, PickerItemComponent = PickerItem, placeholder, selectedItem }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            style={styles.icon}
                            name={icon}
                            size={20}
                            color={colors.medium}
                        />
                    )}

                    {selectedItem ? (
                        <AppText style={styles.text}>
                            {selectedItem.label}
                        </AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType={"slide"}>
                <Screen>
                    <AppButton
                        style={styles.button}
                        color="secondary"
                        title="Close"
                        onPress={() => setModalVisible(false)}
                    />

                    <FlatList
                        // style={styles.list}
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },

    icon: {
        marginRight: 10,
    },

    text: {
        flex: 1,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: colors.dark,
    },

    placeholder: {
        flex: 1,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: colors.medium,
    },

    button: {
        width: "60%",
        borderRadius: 75,
        alignSelf: 'center',
    },
})

export default AppPicker;