import { create } from "apisauce";

const client = create({
    baseURL: "http://192.168.0.234:9000/api",
});

export default client;