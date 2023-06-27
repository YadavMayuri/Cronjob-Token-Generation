import axios from "axios"

//Get Locales
export const GetLocales = async (req, res) => {

    const options = {
        method: 'GET',
        url: 'https://skyscanner-api.p.rapidapi.com/v3/culture/locales',
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


// export const getCurrencies = async(req,res)=>{
    
// }
export const getCurrencies = async(req,res)=>{

    const options = {
      method: 'GET',
      url: 'https://skyscanner-api.p.rapidapi.com/v3/culture/currencies',
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


//Market

 export const Market = async(req,res)=>{

    const options = {
         method: 'GET',
          url: 'https://skyscanner-api.p.rapidapi.com/v3/culture/markets/en-US',
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


