import axios from "axios";


export default async function handler(req,resp) {

    const config = {
        headers: {
            Authorization: process.env.BACKEND_API_KEY
        }
    }


    const data = req.body

    const endpoint = `${process.env.BACKEND_SERVER_URL}/survey/getLastQuestion`

    try {

        console.log("getting last question at", endpoint)
        console.log("getting last question using data", data)

        const returned = await axios.post(endpoint, data, config);

        console.log("result of last question",returned )

        resp.status(200).json({lastQuestion: returned.data.records[0]._fields[0]})

    } catch (e) {
        //console.log(e)
    }

}