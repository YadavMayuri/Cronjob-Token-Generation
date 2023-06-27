import axios from "axios"
import { CronJob } from "cron";
import Token from "../modals/sessionToken.js"

let job = new CronJob('0 */5 * * *', () => {
    Token.updateOne({}, { $unset: { token: 1 } }).exec();
});

job.start();

export const CreateASearch = async (req, res) => {

    const options = {
        method: 'POST',
        url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/create',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
            'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
        },
        data: {
            query: {
                market: 'UK',
                locale: 'en-GB',
                currency: 'EUR',
                queryLegs: [
                    {
                        originPlaceId: { iata: 'LHR' },
                        destinationPlaceId: { iata: 'DXB' },
                        date: {
                            year: 2023,
                            month: 9,
                            day: 20
                        }
                    }
                ],
                cabinClass: 'CABIN_CLASS_ECONOMY',
                adults: 2,
                childrenAges: [3, 9]
            }
        }
    };

    try {
        const response = await axios.request(options);
        // return res.send(response.data);
        const responsedata = response.data.sessionToken;


        const rToken = await Token.findOne({}).exec();
        if (rToken) {
            rToken.token = responsedata;
            await rToken.save();
            return res.send("Token updated successfully")
        }


        const token = new Token({
            token: responsedata
        });
        await token.save();
        return res.send("Token created successfully");


    } catch (error) {
        res.send(error);
    }
}


export const PollASearch = async (req, res) => {

    try {
        const { id } = req.body;
        const sToken = await Token.find({ _id: id }).exec();
        const token = sToken[0].token;

        const options = {
            method: 'GET',
            url: `https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/${token}`,
            headers: {
                'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
                'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        return res.send(response.data);
    } catch (error) {
        res.send(error);
    }
}



export const PollSearch = async (req, res) => {


    try {
        const { id } = req.body;
        const sToken = await Token.find({ _id: id }).exec();
        const token = sToken[0].token;


        const options = {
            method: 'POST',
            url: `https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/${token}`,
            headers: {
                'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
                'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
            }
        };


        const response = await axios.request(options);
        return res.send(response.data);
    } catch (error) {
        res.send(error);
    }
}