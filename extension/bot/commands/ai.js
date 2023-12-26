const axios = require('axios')

const hercURL = "https://www.api.vyturex.com/liner?prompt=QUES"

const herc = async (message) => {
  try {
    console.log(hercURL.replace("QUES", encodeURIComponent(message)));
    const response = await axios.get(hercURL.replace("QUES", encodeURIComponent(message)));
    let res =  response.data.answer;
    //console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}


module.exports = {
  herc,

}