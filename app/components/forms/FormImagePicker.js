import { useFormikContext } from "formik";

import ImageInputList from "../ImageInputList";
import AppErrorMessage from "./AppErrorMessage";


const FormImagePicker = ( { name } ) => {

    const { setFieldValue, errors, values, touched } = useFormikContext();

    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    };

    const handleRemove = (uri) => {
        setFieldValue(name, values[name].filter((imageUri) => imageUri !== uri ))
    }

    return (
        <>
            <ImageInputList imageUris={values[name]} onAddImage={handleAdd} onRemoveImage={handleRemove} />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormImagePicker;