
import {createSchema} from "../../lib/generateSchema";



export default async function handler(req,resp) {



    try {

        resp.status(200).json(createSchema())


    } catch (e) {
        resp.status(400)
        console.log(e)
        //throw new IDUnassigned(e.message)
    }


    //resp.status(200).json({response: data})

}