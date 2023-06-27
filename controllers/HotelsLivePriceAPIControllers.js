import axios from "axios"

export const StartASearch = async (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://skyscanner-api.p.rapidapi.com/v3e/hotels/live/search/create',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
            'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
        },
        data: {
            query: {
                market: 'UK',
                locale: 'en-GB',
                currency: 'GBP',
                adults: 2,
                placeId: {
                    entityId: '27539564'
                },
                checkInDate: {
                    year: 2023,
                    month: 9,
                    day: 3
                },
                checkOutDate: {
                    year: 2023,
                    month: 9,
                    day: 12
                },
                rooms: 1,
                childrenAges: [4, 2],
                sortBy: 'RELEVANCE_DESC'
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



export const PollAPageFromSearch = async (req, res) => {

    const options = {
      method: 'GET',
      url: 'https://skyscanner-api.p.rapidapi.com/v3e/hotels/live/search/poll/1/vnHyADfKA_Cy-4xnc30U6B96rv29WPuX9XIo2kVUZj55c7-hd74FmywMMoRSFpHeUCNAkNK8N0gn0i5MPR1RHnlFjdBRgQeM3PULpAD3XwDwcNWw_bbi3wxKsLmd1zBxa12KoiaieoWvBYMPnNwkixVHRCl4Oa5VQJnx5tyAG06X463VFhcImku1cX5pk_ARM4YtbPNxrE03aF6BjAhfR1dXWxzXhMs2bIOAtWCwQC5V6fCEuTfBqy_a5BeLJFa7GXtq81nZyAvfsuciu93m3XD7U5NLCKLIZJu-_gQmiRxFcT3PVOb19TqOvSDx6pykep2cC4EXcFtlKXuO-Fuvnp8UzgW-mr-zA_r5SRG0qs_zpA1sS_AZo9PPe0S4JPyXpJ25SFQD6LGJl5ghWoH5BE8fLyttWa0JijB8bdF_dBgY1ih1IKjBWPUp-Pi6WwzCAOmQqYlENidknltUNEiLhg',
      headers: {
        'X-RapidAPI-Key': 'b976958422msh8bf1543debe83e3p1e9b62jsn6791d83ab475',
        'X-RapidAPI-Host': 'skyscanner-api.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return res.send(response.data);
    } catch (error) {
        res.send(error);
    }
}