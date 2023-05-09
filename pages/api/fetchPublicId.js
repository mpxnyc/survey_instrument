import axios from "axios";


export default async function handler(req,resp) {

    const config = {
        headers: {
            Authorization: process.env.BACKEND_API_KEY
        }
    }


    const data = req.body

    const endpoint = `${process.env.BACKEND_SERVER_URL}/user/name/${data.userName}`

    try {


        const returned = await axios.get(endpoint, config);



        resp.status(200).json({publicId: returned.data.public_id})

    } catch (e) {
        //console.log(e)
    }

}