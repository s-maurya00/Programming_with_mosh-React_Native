import { create } from "apisauce";

const client = create({
    baseURL: "http://192.168.56.1:9000/api",
});

export default client;