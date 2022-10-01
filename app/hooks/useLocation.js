import { useEffect, useState } from 'react';

import * as Location from 'expo-location';


const useLocation = () => {

    const [location, setLocation] = useState();

    const getLocation = async() => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if(!granted) return;
            

            const lastKnownPosition = await Location.getLastKnownPositionAsync();
            if (!lastKnownPosition) return;

            const { latitude, longitude } = lastKnownPosition.coords;
            setLocation({ latitude, longitude });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return location;
};

export default useLocation;