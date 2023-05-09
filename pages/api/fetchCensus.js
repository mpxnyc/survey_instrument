import axios from "axios";


export default async function handler(req, resp) {

    let data;
    let query = '';

    try {
        query = JSON.parse(req.body)
        const url = `https://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=${query.lng}&y=${query.lat}&benchmark=2020&vintage=2020&format=json&layers=8`
        console.log(url)
        data = await axios.get(url);
    } catch (error) {
        resp.status(400)
    }

    resp.status(200).json({result: data.data.result.geographies['Census Block Groups'][0].GEOID.slice(0,11)})
}