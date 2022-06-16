import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler'; //Not sure why this was imported in this file
// GestureHandlerRootView enabled the swipe gesture to run in android environment and without it the swipe gesture only worked in IOS device


import colors from '../../configs/colors';

const ListItem = ({ title, subTitle, image, onPress, IconComponent, renderRightActions, style }) => {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                    <View style={[styles.container, style]}>

                        { IconComponent }

                        { image && <Image style={styles.image} source={image} /> }

                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1} > {title} </AppText>

                            { subTitle && <AppText style={styles.subTitle} numberOfLines={2}> {subTitle} </AppText>}
                        </View>

                        { renderRightActions && <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={20} />}
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },

    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },

    title: {
        fontWeight: "500",
    },

    subTitle: {
        color: colors.medium,
    },
})

export default ListItem;