const axios = require('axios')

const nteachurl =
  "https://simsimi.fun/api/v2/?mode=teach&lang=bn&message=QUES&answer=ANSWER";
const nsimurl =
  "https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=MESSAGE&filter=false"

const ask = async (message) => {
  try {
    console.log(nsimurl.replace("MESSAGE", message));
    const response = await axios.get(nsimurl.replace("MESSAGE", message));
    let res =  response.data.success;
    //console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}

const teach = async (ques, msg)=>{
  try {
    const response = await axios.get(nteachurl.replace("QUES", ques).replace("ANSWER", msg));
    return response.data.success;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  ask,
  teach
}