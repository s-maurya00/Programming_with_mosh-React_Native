import client from "./client";

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

// const addListings = () => client.post(endpoint);

export default {
    getListings,
    // addListings,
};