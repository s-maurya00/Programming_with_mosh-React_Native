import { useFormikContext } from 'formik';

import AppErrorMessage from './AppErrorMessage';
import AppPicker from '../AppPicker';

const AppFormPicker = ({ items, name, numberOfColumns, PickerItemComponent, placeholder }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker
                items={items}
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

export default AppFormPicker;