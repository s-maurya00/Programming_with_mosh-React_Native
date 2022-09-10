import { useFormikContext } from 'formik';

import AppButton from '../ui/AppButton';

const SubmitButton = ({ title }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <AppButton title={title} onPress={handleSubmit} />
    );
}

export default SubmitButton;