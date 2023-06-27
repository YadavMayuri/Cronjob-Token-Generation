import axios from "axios"

export const autoSuggestFlights = async (req, res) => {

    const options = {
        method: 'POST',
        url: 'https://skyscanner-api.p.rapidapi.com/v3/autosuggest/flights',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
            'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
        },
        data: {
            query: {
                market: 'UK',
                locale: 'en-GB',
                searchTerm: 'Lond'
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



export const autoSuggestHotels = async (req, res) => {

    const options = {
        method: 'POST',
        url: 'https://skyscanner-api.p.rapidapi.com/v3/autosuggest/hotels',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
            'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
        },
        data: {
            query: {
                market: 'UK',
                locale: 'en-GB',
                searchTerm: 'Lond'
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