import { StyleSheet, View } from "react-native";

import colors from "../../configs/colors";

const ListItemSeparator = () => {
    return (
        <View style={styles.separator} />
    )
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.light,
    },
})

export default ListItemSeparator;