import axios from "axios";


export default async function handler(req,resp) {

    const config = {
        headers: {
            Authorization: process.env.BACKEND_API_KEY
        }
    }


    const data = req.body


    const endpoint = `${process.env.BACKEND_SERVER_URL}/viral/create`

    try {


        const returned = await axios.post(endpoint, data, config);
        resp.status(200).json({result: returned.data})

    } catch (e) {
        console.log("error transmitting to backend create virus")
        //console.log(e)
    }

}