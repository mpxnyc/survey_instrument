import axios from "axios";


export default async function handler(req,resp) {

    let data;

    try {

        const config = {
            headers: {
                Authorization: process.env.BACKEND_API_KEY
            }
        }

        const endpoint = `${process.env.BACKEND_SERVER_URL}/user`;

        data = await axios.post(endpoint, {}, config);
        return resp.status(200).json(data.data);

    } catch (e) {
        console.log("assign id failed")
        return resp.status(500).end()
    }


}