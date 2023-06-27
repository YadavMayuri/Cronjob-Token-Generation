import axios from "axios"

export const CreateAndPollSearch = async (req, res) => {

    const options = {
        method: 'POST',
        url: 'https://skyscanner-api.p.rapidapi.com/v3e/flights/live/search/synced',
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
        return res.send(response.data);
    } catch (error) {
        res.send(error);
    }
}
