// const { default: Axios} = require(axios);


const APIkey = "AIzaSyBUnG1mArWfBbD4ots9ieQaImtUCNvOVNo";
const youtubeID = "UCfw2hvuj40AChU7n-N-PRHA";  // youtube id 

const subCount =  document.querySelector(".sub-count");

const gyoutubes = async () => {
  const getData = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeID}&key=${APIkey}`);
  
  const ytSubs = getData.data.items[0].statistics.subscriberCount;

  subCount.innerHTML = ytSubs;


};

gyoutubes();