import axios from "axios"


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
        return res.send(response.data);
    } catch (error) {
        res.send(error);
    }
}


export const PollASearch = async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/_4jiChyuWrSJ55Aq7teDdQHNnGTA4zK0y04j7YoyhN9dMR-pLy3dhsu2N7pw2Gfzh9iMthv8B4AOHi56Xv0HeyX52bBCGcR3SV_M9NbfhJ2A5Et0rpeDwliCIHc0Q86d-8LP-bBrHOSvuEeryqyUFVXB-qVojHthWXRyCIfo9K_srUq40CxY-QIyQJWaTvz0eg9SIevsXTZ5ZQiyxmO9APYi-V4RckDBKjAvHYJwAzzt4OBdCn2z1NbKFUnrMWiYGWFa1SnAOTqWaRrMdlKCE6YjdreZ8VSYExGv4xnAo_eVRkdY0o019dqmHLg6P3DhtH9EfgX_ytNT2OuGNxx1cU1yZJbVp3vOOd_1i22kdp2gg65BNZ4ol7Rbh1ZWD-bEo7vlwJvqtFXmwPCT-uxmfqdj8hlg3wyBZYhPh9ni8oXxDLnbyBTuZV3efnqubkORIyznJQqqwBpZdcI_eFxSkippAZw6-osu5csrzFuIM81D4Z3yIMfQlEcaYHdpRKPcZsMlRqzEuhtGgPjBshLpGg',
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



export const PollSearch = async (req, res) => {

    const options = {
        method: 'POST',
        url: 'https://skyscanner-api.p.rapidapi.com/v3/flights/live/search/poll/acOWy3tmjMRp3Y1DiGKNvqP5bNJeoUIcpssfLKEKMWp7MffS8cSG6K3DkCHf_wIw4DTAk1CHvYLk1esBdp_xo2P6h1I5zfbiwIknRQhOzY9M9b8i5jUWbvGfL0KKNhQnU8glhqBfLBXnY5P_MI3W2dbK0ajfWoOraHvNL7Z3LPD4eqotEdRlBDxLoPFPPWQ7S0W-Tbuuityyhce37dnniQqhuNiKB9PcsQdPJ6k8t4PDY3VUvDDB1sGUUStkMlckyCt1fWbrpFm4kpblP_7VMPxVnlKC4nP8KxLq5ECuom6DPXTJgpMxpTlE9TMCwAhu0yG1GODVkgnBKatgJ1Ao5oDb0M9lyQaaB3V4FqLNNOnLSV8QnImYkTO98Jaf2ub9uC7wDWjwqUxTKAk2hKhp_QdR6_S_8pE1fQVcWUfDHILiPdKkTTpUjLZOKgM-PQI-kxwJGu4uvtX4SgYq-s2y9PCAv3YBdyhWQgIGMfmx1H43kAR668IfEHypPMgSg5S6hIBEHxaUJIQGTRgwY9xihQ',
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