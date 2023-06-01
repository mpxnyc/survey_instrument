import axios from "axios";


export default async function handler(req,resp) {

    let data;

    const config = {
        headers: {
            Authorization: process.env.BACKEND_API_KEY
        }
    }
    const endpoint = `${process.env.BACKEND_SERVER_URL}/user`;


    try {
        data = await axios.post(endpoint, {}, config);
        resp.status(200).json(data.data)

    } catch (e) {
        console.log("assign id failed")
        console.log(e)
        resp.status(400)

    }


}