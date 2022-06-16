import {  } from 'react-native';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

const AppFormPicker = ({ items, name, numberOfColumns, PickerItemComponent, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                item={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
            />

            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}


const styles = StyleSheet.create({
    
})

export default AppFormPicker;